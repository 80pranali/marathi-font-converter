"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  convertMarathiText,
  getAvailableFonts,
  validateConversion,
} from "@/lib/marathi-converter";

import {
  ArrowLeftRight,
  BookOpen,
  CheckCircle2,
  Copy,
  Home,
  Info,
  Languages,
  ShieldCheck,
  Trash2,
  Zap,
  Sun,
  Moon,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";


const MAX_WORDS = 100000;
const MAX_CHARACTERS = 500000;


export default function MarathiConverter() {
  // --------------------------------------------------
  // STATE
  // --------------------------------------------------

  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");

  const [sourceFont, setSourceFont] = useState("unicode");
  const [targetFont, setTargetFont] = useState("aps-dv-prakash");

  const [isConverting, setIsConverting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { toast } = useToast();


  // --------------------------------------------------
  // AVAILABLE FONTS
  // --------------------------------------------------

  const availableFonts = getAvailableFonts();


  // --------------------------------------------------
  // SOURCE TEXT COUNTS
  // --------------------------------------------------

  const wordCount = useMemo(() => {
    return sourceText.trim()
      ? sourceText.trim().split(/\s+/).length
      : 0;
  }, [sourceText]);


  const characterCount = useMemo(() => {
    return sourceText.length;
  }, [sourceText]);


  // --------------------------------------------------
  // TARGET TEXT COUNTS
  // --------------------------------------------------

  const targetWordCount = useMemo(() => {
    return targetText.trim()
      ? targetText.trim().split(/\s+/).length
      : 0;
  }, [targetText]);


  const targetCharacterCount = useMemo(() => {
    return targetText.length;
  }, [targetText]);


  // --------------------------------------------------
  // LIMIT CHECK
  // --------------------------------------------------

  const isOverLimit =
    wordCount > MAX_WORDS ||
    characterCount > MAX_CHARACTERS;


  // --------------------------------------------------
  // FONT DISPLAY NAME
  // --------------------------------------------------

  const getFontDisplayName = (fontName: string) => {
    const font = availableFonts.find(
      (font) => font.name === fontName
    );

    return font?.displayName || fontName;
  };


  // --------------------------------------------------
  // FONT STYLE
  // --------------------------------------------------

  const getTextAreaFontStyle = (fontName: string) => {
    if (fontName === "marathi-lekhani-normal") {
      return {
        fontFamily: "'Marathi-Lekhani-Normal', sans-serif",
      };
    }

    return undefined;
  };


  // --------------------------------------------------
  // FORMAT COUNTS
  // --------------------------------------------------

  const formatCount = (count: number) => {
    if (count >= 100000) {
      return `${(count / 100000).toFixed(1)} Lakh`;
    }

    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }

    return count.toString();
  };


  // --------------------------------------------------
  // CONVERT
  // --------------------------------------------------

  const handleConvert = (
    direction: "forward" | "backward"
  ) => {
    if (!sourceText.trim()) {
      toast({
        title: "Input is empty",
        description:
          "Please enter some text to convert.",
        variant: "destructive",
      });

      return;
    }


    if (isOverLimit) {
      toast({
        title: "Text too long",
        description: `Maximum allowed is ${MAX_WORDS.toLocaleString()} words or ${MAX_CHARACTERS.toLocaleString()} characters.`,
        variant: "destructive",
      });

      return;
    }


    setIsConverting(true);


    try {
      let result: string;


      if (direction === "forward") {
        result = convertMarathiText(
          sourceText,
          sourceFont,
          targetFont
        );
      } else {
        result = convertMarathiText(
          sourceText,
          targetFont,
          sourceFont
        );
      }


      setTargetText(result);


      toast({
        title: "Conversion Complete",
        description: `Successfully converted ${wordCount.toLocaleString()} words from ${getFontDisplayName(
          sourceFont
        )} to ${getFontDisplayName(targetFont)}.`,
      });


      // Validate conversion
      const isValid = validateConversion(
        sourceText,
        sourceFont,
        targetFont
      );


      if (!isValid) {
        console.warn(
          "Conversion validation failed - some characters may not have been converted correctly"
        );
      }

    } catch (error) {
      console.error(
        "Conversion error:",
        error
      );

      toast({
        title: "Conversion Error",
        description:
          "An error occurred during conversion. Please try again.",
        variant: "destructive",
      });

    } finally {
      setIsConverting(false);
    }
  };


  // --------------------------------------------------
  // COPY
  // --------------------------------------------------

  const handleCopy = () => {
    if (!targetText) {
      return;
    }


    navigator.clipboard
      .writeText(targetText)
      .then(() => {
        toast({
          title: "Copied to Clipboard",
          description:
            "The converted text has been copied successfully.",
        });
      })
      .catch(() => {
        toast({
          title: "Copy Failed",
          description:
            "Unable to copy the converted text.",
          variant: "destructive",
        });
      });
  };


  // --------------------------------------------------
  // SOURCE TEXT CHANGE
  // --------------------------------------------------

  const handleSourceTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = e.target.value;

    setSourceText(newText);


    if (newText === "") {
      setTargetText("");
    }
  };


  // --------------------------------------------------
  // FONT CHANGE
  // --------------------------------------------------

  const handleFontChange = (
    type: "source" | "target",
    value: string
  ) => {
    if (type === "source") {
      setSourceFont(value);
    } else {
      setTargetFont(value);
    }


    // Clear old conversion when fonts change
    setTargetText("");
  };


  // --------------------------------------------------
  // SWAP SOURCE / TARGET
  // --------------------------------------------------

  const handleSwap = () => {
    const oldSourceFont = sourceFont;
    const oldTargetFont = targetFont;

    const oldSourceText = sourceText;
    const oldTargetText = targetText;


    setSourceFont(oldTargetFont);
    setTargetFont(oldSourceFont);

    setSourceText(oldTargetText);
    setTargetText(oldSourceText);
  };


  // --------------------------------------------------
  // CLEAR
  // --------------------------------------------------

  const handleClear = () => {
    setSourceText("");
    setTargetText("");
  };

  const handleThemeToggle = () => {
    setIsDarkMode((previous) => !previous);
  };

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <main
      className={`modern-bg min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 ${
        isDarkMode ? "dark-theme" : ""
      }`}
    >

      <Card className="modern-container w-full">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="modern-header">

          <div className="modern-brand">

            <div className="brand-logo">
              अ
            </div>


            <div>

              <h1 className="modern-title">
                Marathi Font Converter
              </h1>

              <p className="modern-subtitle">
                Convert between different Marathi fonts
                easily and accurately
              </p>

            </div>

          </div>


          {/* Navigation */}

          <nav className="modern-nav">
            {/* Theme Toggle */}
            <button
              type="button"
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label={
                isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
              }
              title={
                isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </nav>

        </div>


        {/* ==========================================
            MAIN CONTENT
        ========================================== */}

        <CardContent className="modern-content">


          {/* ========================================
              CONVERTER AREA
          ======================================== */}

          <div className="converter-grid">


            {/* ======================================
                SOURCE PANEL
            ====================================== */}

            <section className="converter-panel">

              <div className="panel-heading">

                <h2>
                  Source Text
                </h2>

                <span>
                  {formatCount(wordCount)} words
                  {" | "}
                  {formatCount(characterCount)} chars
                </span>

              </div>


              <Label
                htmlFor="source-font"
                className="modern-label"
              >
                Source Font
              </Label>


              <Select
                value={sourceFont}
                onValueChange={(value) =>
                  handleFontChange(
                    "source",
                    value
                  )
                }
              >

                <SelectTrigger
                  id="source-font"
                  className="modern-select"
                >

                  <SelectValue />

                </SelectTrigger>


                <SelectContent>

                  {availableFonts.map(
                    (font) => (
                      <SelectItem
                        key={font.name}
                        value={font.name}
                      >
                        {font.displayName}
                      </SelectItem>
                    )
                  )}

                </SelectContent>

              </Select>


              <Textarea
                id="source-input"
                placeholder="Enter your text here..."
                value={sourceText}
                onChange={handleSourceTextChange}
                style={getTextAreaFontStyle(
                  sourceFont
                )}
                className={`modern-textarea ${
                  isOverLimit
                    ? "modern-textarea-error"
                    : ""
                }`}
                rows={7}
                maxLength={MAX_CHARACTERS}
              />


              <p className="panel-helper">
                Type or paste your Marathi text here
              </p>


              {isOverLimit && (
                <p className="limit-warning">
                  Maximum limit exceeded.
                </p>
              )}

            </section>


            {/* ======================================
                SWAP BUTTON
            ====================================== */}

            <button
              type="button"
              className="swap-button"
              onClick={handleSwap}
              aria-label="Swap source and target"
              title="Swap source and target"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </button>


            {/* ======================================
                TARGET PANEL
            ====================================== */}

            <section className="converter-panel">

              <div className="panel-heading">

                <h2>
                  Converted Text
                </h2>

                <span>
                  {formatCount(targetWordCount)}
                  {" words | "}
                  {formatCount(
                    targetCharacterCount
                  )}
                  {" chars"}
                </span>

              </div>


              <Label
                htmlFor="target-font"
                className="modern-label"
              >
                Target Font
              </Label>


              <Select
                value={targetFont}
                onValueChange={(value) =>
                  handleFontChange(
                    "target",
                    value
                  )
                }
              >

                <SelectTrigger
                  id="target-font"
                  className="modern-select"
                >

                  <SelectValue />

                </SelectTrigger>


                <SelectContent>

                  {availableFonts.map(
                    (font) => (
                      <SelectItem
                        key={font.name}
                        value={font.name}
                      >
                        {font.displayName}
                      </SelectItem>
                    )
                  )}

                </SelectContent>

              </Select>


              <div className="output-wrapper">

                <Textarea
                  id="target-output"
                  readOnly
                  value={targetText}
                  placeholder="Converted text will appear here..."
                  style={getTextAreaFontStyle(
                    targetFont
                  )}
                  className="modern-textarea"
                  rows={7}
                />


                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  disabled={!targetText}
                  className="copy-button"
                  aria-label="Copy converted text"
                  title="Copy converted text"
                >
                  <Copy className="h-5 w-5" />
                </Button>

              </div>


              <p className="panel-helper">
                Your converted text will appear here
              </p>

            </section>

          </div>


          {/* ========================================
              ACTION BUTTONS
          ======================================== */}

          <div className="action-buttons">

            <Button
              type="button"
              onClick={() =>
                handleConvert("forward")
              }
              disabled={
                isConverting ||
                isOverLimit
              }
              className="convert-button"
            >

              {isConverting ? (
                <span className="modern-spinner" />
              ) : (
                <ArrowLeftRight className="h-4 w-4" />
              )}

              {isConverting
                ? "Converting..."
                : "Convert Now"}

            </Button>


            <Button
              type="button"
              variant="outline"
              className="clear-button"
              onClick={handleClear}
            >

              <Trash2 className="h-4 w-4" />

              Clear

            </Button>

          </div>


          {/* ========================================
              FEATURE CARDS
          ======================================== */}

          <div className="feature-grid">


            {/* Multiple Fonts */}

            <div className="feature-card">

              <div className="feature-icon feature-blue">
                <Languages className="h-5 w-5" />
              </div>


              <div>

                <h3>
                  Multiple Fonts
                </h3>

                <p>
                  Support
                </p>

              </div>

            </div>


            {/* Fast & Accurate */}

            <div className="feature-card">

              <div className="feature-icon feature-red">
                <Zap className="h-5 w-5" />
              </div>


              <div>

                <h3>
                  Fast & Accurate
                </h3>

                <p>
                  Conversion
                </p>

              </div>

            </div>


            {/* Formatting */}

            <div className="feature-card">

              <div className="feature-icon feature-purple">
                <CheckCircle2 className="h-5 w-5" />
              </div>


              <div>

                <h3>
                  Preserves
                </h3>

                <p>
                  Formatting
                </p>

              </div>

            </div>


            {/* Free */}

            <div className="feature-card">

              <div className="feature-icon feature-green">
                <ShieldCheck className="h-5 w-5" />
              </div>


              <div>

                <h3>
                  100% Free
                </h3>

                <p>
                  To Use
                </p>

              </div>

            </div>

          </div>


        </CardContent>

      </Card>

    </main>
  );
}
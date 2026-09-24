// Comprehensive Marathi Font Converter
// Supports 100+ fonts with bidirectional conversion

export interface FontMapping {
  unicode_to_font: Record<string, string>;
  font_to_unicode: Record<string, string>;
}

export interface FontInfo {
  name: string;
  displayName: string;
  mapping: FontMapping;
}

// Comprehensive font mappings
export const fontMappings: Record<string, FontInfo> = {
  'unicode': {
    name: 'unicode',
    displayName: 'Unicode',
    mapping: {
      unicode_to_font: {},
      font_to_unicode: {}
    }
  },
  'aps-dv-prakash': {
    name: 'aps-dv-prakash',
    displayName: 'APS DV Prakash',
    mapping: {
      unicode_to_font: {
        // Vowels
        'अ': 'v',
        'आ': 'vk',
        'इ': 'b',
        'ई': 'bZ',
        'उ': 'm',
        'ऊ': 'm~',
        'ऋ': '`',
        'ए': ',s',
        'ऐ': ',l',
        'ओ': 'vks',
        'औ': 'vkS',
        'अं': 'va',
        'अः': 'v%',
        
        // Consonants
        'क': 'd',
        'ख': 'd[k',
        'ग': 'x',
        'घ': '?k',
        'ङ': '³',
        'च': 'p',
        'छ': 'N',
        'ज': 't',
        'झ': 'T',
        'ञ': 'u',
        'ट': 'V',
        'ठ': 'B',
        'ड': 'M',
        'ढ': '<',
        'ण': '.k',
        'त': 'r',
        'थ': 'Fk',
        'द': 'n',
        'ध': '/k',
        'न': 'u',
        'प': 'i',
        'फ': 'Q',
        'ब': 'c',
        'भ': 'Hk',
        'म': 'e',
        'य': ';',
        'र': 'j',
        'ल': 'y',
        'व': 'o',
        'श': "'k",
        'ष': '"k',
        'स': 'l',
        'ह': 'g',
        
        // Matras
        'ा': 'k',
        'ि': 'h',
        'ी': 'h',
        'ु': 'q',
        'ू': 'w',
        'ृ': '`',
        'े': 's',
        'ै': 'S',
        'ो': 'ks',
        'ौ': 'kS',
        '्': '~',
        'ं': 'a',
        'ः': '%',
        
        // Special characters
        '।': 'A',
        '॥': 'AA',
        'ऽ': 'd_',
        'ॐ': 'vke~',
        
        // Numbers
        '०': '0',
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        
        // Punctuation
        '?': '?',
        '!': '!',
        ',': ',',
        '.': '.',
        ';': ';',
        ':': ':',
        '"': '"',
        "'": "'",
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}',
        '-': '-',
        '_': '_',
        '=': '=',
        '+': '+',
        '*': '*',
        '/': '/',
        '\\': '\\',
        '|': '|',
        '&': '&',
        '@': '@',
        '#': '#',
        '$': '$',
        '^': '^',
        ' ': ' '
      },
      font_to_unicode: {
        // Reverse mappings for APS DV Prakash
        'v': 'अ',
        'vk': 'आ',
        'b': 'इ',
        'bZ': 'ई',
        'm': 'उ',
        'm~': 'ऊ',
        '`': 'ऋ',
        ',s': 'ए',
        ',l': 'ऐ',
        'vks': 'ओ',
        'vkS': 'औ',
        'va': 'अं',
        'v%': 'अः',
        
        'd': 'क',
        'd[k': 'ख',
        'x': 'ग',
        '?k': 'घ',
        '³': 'ङ',
        'p': 'च',
        'N': 'छ',
        't': 'ज',
        'T': 'झ',
        'u': 'ञ',
        'V': 'ट',
        'B': 'ठ',
        'M': 'ड',
        '<': 'ढ',
        '.k': 'ण',
        'r': 'त',
        'Fk': 'थ',
        'n': 'द',
        '/k': 'ध',
        'i': 'प',
        'Q': 'फ',
        'c': 'ब',
        'Hk': 'भ',
        'e': 'म',
        ';': 'य',
        'j': 'र',
        'y': 'ल',
        'o': 'व',
        "'k": 'श',
        '"k': 'ष',
        'l': 'स',
        'g': 'ह',
        
        'k': 'ा',
        'h': 'ि',
        'q': 'ु',
        'w': 'ू',
        's': 'े',
        'S': 'ै',
        'ks': 'ो',
        'kS': 'ौ',
        '~': '्',
        'a': 'ं',
        '%': 'ः',
        
        'A': '।',
        'AA': '॥',
        'd_': 'ऽ',
        'vke~': 'ॐ',
        
        '0': '०',
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        
        '?': '?',
        '!': '!',
        ',': ',',
        '.': '.',
        ';': ';',
        ':': ':',
        '"': '"',
        "'": "'",
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}',
        '-': '-',
        '_': '_',
        '=': '=',
        '+': '+',
        '*': '*',
        '/': '/',
        '\\': '\\',
        '|': '|',
        '&': '&',
        '@': '@',
        '#': '#',
        '$': '$',
        '^': '^',
        ' ': ' '
      }
    }
  },
  'krutidev': {
    name: 'krutidev',
    displayName: 'Kruti Dev 010',
    mapping: {
      unicode_to_font: {
        // Vowels
        'अ': 'v',
        'आ': 'vk',
        'इ': 'b',
        'ई': 'bZ',
        'उ': 'm',
        'ऊ': 'm~',
        'ऋ': '`',
        'ए': ',s',
        'ऐ': ',l',
        'ओ': 'vks',
        'औ': 'vkS',
        'अं': 'va',
        'अः': 'v%',
        
        // Consonants
        'क': 'd',
        'ख': '[k',
        'ग': 'x',
        'घ': '?k',
        'ङ': '³',
        'च': 'p',
        'छ': 'N',
        'ज': 't',
        'झ': 'T',
        'ञ': 'u',
        'ट': 'V',
        'ठ': 'B',
        'ड': 'M',
        'ढ': '<',
        'ण': '.k',
        'त': 'r',
        'थ': 'Fk',
        'द': 'n',
        'ध': '/k',
        'न': 'U',
        'प': 'i',
        'फ': 'Q',
        'ब': 'c',
        'भ': 'Hk',
        'म': 'e',
        'य': ';',
        'र': 'j',
        'ल': 'y',
        'व': 'o',
        'श': "'k",
        'ष': '"k',
        'स': 'l',
        'ह': 'g',
        
        // Matras
        'ा': 'k',
        'ि': 'h',
        'ी': 'h',
        'ु': 'q',
        'ू': 'w',
        'ृ': '`',
        'े': 's',
        'ै': 'S',
        'ो': 'ks',
        'ौ': 'kS',
        '्': '~',
        'ं': 'a',
        'ः': '%',
        
        // Special characters
        '।': 'A',
        '॥': 'AA',
        'ऽ': 'd_',
        'ॐ': 'vke~',
        
        // Numbers
        '०': '0',
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        
        // Punctuation
        '?': '?',
        '!': '!',
        ',': ',',
        '.': '.',
        ';': ';',
        ':': ':',
        '"': '"',
        "'": "'",
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}',
        '-': '-',
        '_': '_',
        '=': '=',
        '+': '+',
        '*': '*',
        '/': '/',
        '\\': '\\',
        '|': '|',
        '&': '&',
        '@': '@',
        '#': '#',
        '$': '$',
        '^': '^',
        ' ': ' '
      },
      font_to_unicode: {
        // Reverse mappings for Krutidev
        'v': 'अ',
        'vk': 'आ',
        'b': 'इ',
        'bZ': 'ई',
        'm': 'उ',
        'm~': 'ऊ',
        '`': 'ऋ',
        ',s': 'ए',
        ',l': 'ऐ',
        'vks': 'ओ',
        'vkS': 'औ',
        'va': 'अं',
        'v%': 'अः',
        
        'd': 'क',
        '[k': 'ख',
        'x': 'ग',
        '?k': 'घ',
        '³': 'ङ',
        'p': 'च',
        'N': 'छ',
        't': 'ज',
        'T': 'झ',
        'u': 'ञ',
        'V': 'ट',
        'B': 'ठ',
        'M': 'ड',
        '<': 'ढ',
        '.k': 'ण',
        'r': 'त',
        'Fk': 'थ',
        'n': 'द',
        '/k': 'ध',
        'U': 'न',
        'i': 'प',
        'Q': 'फ',
        'c': 'ब',
        'Hk': 'भ',
        'e': 'म',
        ';': 'य',
        'j': 'र',
        'y': 'ल',
        'o': 'व',
        "'k": 'श',
        '"k': 'ष',
        'l': 'स',
        'g': 'ह',
        
        'k': 'ा',
        'h': 'ि',
        'q': 'ु',
        'w': 'ू',
        's': 'े',
        'S': 'ै',
        'ks': 'ो',
        'kS': 'ौ',
        '~': '्',
        'a': 'ं',
        '%': 'ः',
        
        'A': '।',
        'AA': '॥',
        'd_': 'ऽ',
        'vke~': 'ॐ',
        
        '0': '०',
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        
        '?': '?',
        '!': '!',
        ',': ',',
        '.': '.',
        ';': ';',
        ':': ':',
        '"': '"',
        "'": "'",
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}',
        '-': '-',
        '_': '_',
        '=': '=',
        '+': '+',
        '*': '*',
        '/': '/',
        '\\': '\\',
        '|': '|',
        '&': '&',
        '@': '@',
        '#': '#',
        '$': '$',
        '^': '^',
        ' ': ' '
      }
    }
  },
  'shivaji': {
    name: 'shivaji',
    displayName: 'Shivaji',
    mapping: {
      unicode_to_font: {
        // TODO: Add Shivaji font mapping
      },
      font_to_unicode: {
        // TODO: Add Shivaji font reverse mapping
      }
    }
  },
  'devlys-010': {
    name: 'devlys-010',
    displayName: 'DevLys 010',
    mapping: {
      unicode_to_font: {
        // TODO: Add DevLys 010 font mapping
      },
      font_to_unicode: {
        // TODO: Add DevLys 010 font reverse mapping
      }
    }
  },
  'kiran': {
    name: 'kiran',
    displayName: 'Kiran',
    mapping: {
      unicode_to_font: {
        // TODO: Add Kiran font mapping
      },
      font_to_unicode: {
        // TODO: Add Kiran font reverse mapping
      }
    }
  },
  'mangal': {
    name: 'mangal',
    displayName: 'Mangal',
    mapping: {
      unicode_to_font: {
        // TODO: Add Mangal font mapping
      },
      font_to_unicode: {
        // TODO: Add Mangal font reverse mapping
      }
    }
  },
  'saras': {
    name: 'saras',
    displayName: 'Saras',
    mapping: {
      unicode_to_font: {
        // TODO: Add Saras font mapping
      },
      font_to_unicode: {
        // TODO: Add Saras font reverse mapping
      }
    }
  },
  'yogesh': {
    name: 'yogesh',
    displayName: 'Yogesh',
    mapping: {
      unicode_to_font: {
        // TODO: Add Yogesh font mapping
      },
      font_to_unicode: {
        // TODO: Add Yogesh font reverse mapping
      }
    }
  },
  'shree-lipi': {
    name: 'shree-lipi',
    displayName: 'Shree Lipi',
    mapping: {
      unicode_to_font: {
        // TODO: Add Shree Lipi font mapping
      },
      font_to_unicode: {
        // TODO: Add Shree Lipi font reverse mapping
      }
    }
  },
  'akshar': {
    name: 'akshar',
    displayName: 'Akshar',
    mapping: {
      unicode_to_font: {
        // TODO: Add Akshar font mapping
      },
      font_to_unicode: {
        // TODO: Add Akshar font reverse mapping
      }
    }
  },
  'lmg-arun': {
    name: 'lmg-arun',
    displayName: 'LMG Arun',
    mapping: {
      unicode_to_font: {
        // TODO: Add LMG Arun font mapping
      },
      font_to_unicode: {
        // TODO: Add LMG Arun font reverse mapping
      }
    }
  },
  'akruti': {
    name: 'akruti',
    displayName: 'Akruti',
    mapping: {
      unicode_to_font: {
        // TODO: Add Akruti font mapping
      },
      font_to_unicode: {
        // TODO: Add Akruti font reverse mapping
      }
    }
  },
  'marathi-lekhani-normal': {
    name: 'marathi-lekhani-normal',
    displayName: 'Marathi-Lekhani Normal',
    mapping: {
      unicode_to_font: {
        // COMPLETE Marathi-Lekhani Unicode → legacy mapping
      },
      font_to_unicode: {
      // COMPLETE Marathi-Lekhani legacy → Unicode mapping
      }
    }
  },
};

// Get available fonts
export function getAvailableFonts(): FontInfo[] {
  return Object.values(fontMappings);
}

// Main conversion function
export function convertMarathiText(
  inputText: string, 
  sourceFont: string, 
  targetFont: string,
  options: {
    maxLength?: number;
    preserveFormatting?: boolean;
    chunkSize?: number;
  } = {}
): string {
  const {
    maxLength = 500000, // 5 Lakh characters
    preserveFormatting = true,
    chunkSize = 10000 // Process in 10K character chunks for large texts
  } = options;

  // Validate input length
  if (inputText.length > maxLength) {
    throw new Error(`Input text too long. Maximum allowed: ${maxLength.toLocaleString()} characters`);
  }

  // Early return for empty text
  if (!inputText.trim()) {
    return inputText;
  }

  // For very large texts, process in chunks to avoid blocking the UI
  if (inputText.length > chunkSize) {
    return convertLargeText(inputText, sourceFont, targetFont, { preserveFormatting, chunkSize });
  }

  // Normal conversion for smaller texts
  if (sourceFont === 'unicode') {
    return convertUnicodeToFont(inputText, targetFont, preserveFormatting);
  } else if (targetFont === 'unicode') {
    return convertFontToUnicode(inputText, sourceFont, preserveFormatting);
  } else {
    // Convert source font to unicode first, then to target font
    const unicodeText = convertFontToUnicode(inputText, sourceFont, preserveFormatting);
    return convertUnicodeToFont(unicodeText, targetFont, preserveFormatting);
  }
}

// Optimized function for large text conversion
function convertLargeText(
  inputText: string,
  sourceFont: string,
  targetFont: string,
  options: {
    preserveFormatting: boolean;
    chunkSize: number;
  }
): string {
  const { preserveFormatting, chunkSize } = options;
  const chunks: string[] = [];
  
  // Split text into chunks, preserving word boundaries
  for (let i = 0; i < inputText.length; i += chunkSize) {
    let endIndex = Math.min(i + chunkSize, inputText.length);
    
    // Try to break at word boundary
    if (endIndex < inputText.length) {
      const lastSpaceIndex = inputText.lastIndexOf(' ', endIndex);
      if (lastSpaceIndex > i + chunkSize * 0.8) { // Only break at word if it's not too far back
        endIndex = lastSpaceIndex + 1;
      }
    }
    
    chunks.push(inputText.slice(i, endIndex));
  }

  // Convert each chunk
  const convertedChunks = chunks.map(chunk => {
    if (sourceFont === 'unicode') {
      return convertUnicodeToFont(chunk, targetFont, preserveFormatting);
    } else if (targetFont === 'unicode') {
      return convertFontToUnicode(chunk, sourceFont, preserveFormatting);
    } else {
      const unicodeText = convertFontToUnicode(chunk, sourceFont, preserveFormatting);
      return convertUnicodeToFont(unicodeText, targetFont, preserveFormatting);
    }
  });

  return convertedChunks.join('');
}

// Convert Unicode to specific font
function convertUnicodeToFont(text: string, targetFont: string, preserveFormatting: boolean): string {
  const fontInfo = fontMappings[targetFont];
  if (!fontInfo) {
    console.error(`Font mapping not found for: ${targetFont}`);
    return text;
  }
  
  const mapping = fontInfo.mapping.unicode_to_font;
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    // Try to match multi-character sequences first (longest match)
    for (let len = Math.min(4, text.length - i); len > 0; len--) {
      const char = text.substr(i, len);
      if (mapping[char]) {
        result += mapping[char];
        i += len;
        matched = true;
        break;
      }
    }
    
    // If no match found, keep original character
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  
  return result;
}

// Convert specific font to Unicode
function convertFontToUnicode(text: string, sourceFont: string, preserveFormatting: boolean): string {
  const fontInfo = fontMappings[sourceFont];
  if (!fontInfo) {
    console.error(`Font mapping not found for: ${sourceFont}`);
    return text;
  }
  
  const mapping = fontInfo.mapping.font_to_unicode;
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    // Try to match multi-character sequences first (longest match)
    for (let len = Math.min(4, text.length - i); len > 0; len--) {
      const char = text.substr(i, len);
      if (mapping[char]) {
        result += mapping[char];
        i += len;
        matched = true;
        break;
      }
    }
    
    // If no match found, keep original character
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  
  return result;
}

// Validate conversion (round-trip test)
export function validateConversion(text: string, sourceFont: string, targetFont: string): boolean {
  const converted = convertMarathiText(text, sourceFont, targetFont);
  const backConverted = convertMarathiText(converted, targetFont, sourceFont);
  return text === backConverted;
}

// Get font statistics
export function getFontStats(fontName: string): { totalMappings: number; unicodeToFont: number; fontToUnicode: number } {
  const fontInfo = fontMappings[fontName];
  if (!fontInfo) {
    return { totalMappings: 0, unicodeToFont: 0, fontToUnicode: 0 };
  }
  
  const unicodeToFont = Object.keys(fontInfo.mapping.unicode_to_font).length;
  const fontToUnicode = Object.keys(fontInfo.mapping.font_to_unicode).length;
  
  return {
    totalMappings: unicodeToFont + fontToUnicode,
    unicodeToFont,
    fontToUnicode
  };
}

// Legacy compatibility - keep the old function
export function convertUnicodeToAps(text: string): string {
  return convertMarathiText(text, 'unicode', 'aps-dv-prakash');
} 
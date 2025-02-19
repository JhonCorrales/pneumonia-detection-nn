export interface DiagnosisResult {
  prediction: 'NORMAL' | 'PNEUMONIA';
  confidence: number;
  timestamp: string;
}

export interface ModelStats {
  accuracy: number;
  sensitivity: number;
  specificity: number;
}

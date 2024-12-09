export interface Case {
    author: string;
    difficulty: string;
    id: number;
    title: string;
}

export interface Question {
    id: string;
    question: string;
    options: string[];
}

interface Evidence {
    evidence_type: string;
    description: string;
}

interface PreliminaryAnalysis {
    possible_motives: string;
    time_and_place: string;
    forensic_evidence: string;
    potential_witnesses: string;
}

export interface Quize {
    case_id: number;
    title: string;
    criticalQuestions: string[];
    overview: string;
    questions: Question[];
    availableEvidence: Evidence[];
    preliminaryAnalysis: PreliminaryAnalysis;
    objective: string[];
}

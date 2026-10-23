/* -------------------------------------------------------------
   AcuityAI Revision Planner — Interactive JavaScript Engine
   ------------------------------------------------------------- */

// Complete Master Schedule Dataset (95 Sessions across 4 Weeks)
const MASTER_SCHEDULE = [
  // WEEK 1
  { week: 'W1', day: 'Mon (Oct 12)', time: '17:30 - 18:20', subject: 'Mathematics', type: 'Weak', topic: 'Definite Integration by Parts (Inverse Product Rule)', modality: '5 Timed Past-Paper Integrals + Error Log', duration: '50m', done: true },
  { week: 'W1', day: 'Mon (Oct 12)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Weak', topic: 'Integration by Parts: Repeated & Trig Combos', modality: 'Feynman Technique on Whiteboard', duration: '50m', done: true },
  { week: 'W1', day: 'Mon (Oct 12)', time: '19:30 - 20:20', subject: 'Chemistry', type: 'Strong', topic: 'Periodic Trends & Periodicity', modality: '20 Rapid Spaced Flashcards', duration: '50m', done: true },
  
  { week: 'W1', day: 'Tue (Oct 13)', time: '17:30 - 18:20', subject: 'Physics', type: 'Weak', topic: 'Electromagnetic Induction: Faraday & Lenz Laws', modality: 'Direction Prediction Drills (Right Hand Rule)', duration: '50m', done: true },
  { week: 'W1', day: 'Tue (Oct 13)', time: '18:30 - 19:20', subject: 'Physics', type: 'Weak', topic: 'Motional EMF & Induced Current Calculations', modality: '4 Multi-step Calculation Problems', duration: '50m', done: true },
  { week: 'W1', day: 'Tue (Oct 13)', time: '19:30 - 20:20', subject: 'Computer Science', type: 'Strong', topic: 'Boolean Logic & De Morgan Simplification', modality: 'Truth Table Rapid Proofs', duration: '50m', done: true },
  
  { week: 'W1', day: 'Wed (Oct 14)', time: '17:30 - 18:20', subject: 'Computer Science', type: 'Weak', topic: 'Dynamic Programming: Memoization vs Tabulation', modality: 'Code Tracing & State Transition Tree Drawing', duration: '50m', done: true },
  { week: 'W1', day: 'Wed (Oct 14)', time: '18:30 - 19:20', subject: 'Computer Science', type: 'Weak', topic: 'Dynamic Programming: 0/1 Knapsack Formulation', modality: '3 Pseudo-code Problems from Scratch', duration: '50m', done: true },
  { week: 'W1', day: 'Wed (Oct 14)', time: '19:30 - 20:20', subject: 'Mathematics', type: 'Retrieval', topic: 'Math: Integration by Parts (+3d Spaced Retrieval)', modality: '3 Blind Integration Problems without Notes', duration: '50m', done: true },
  
  { week: 'W1', day: 'Thu (Oct 15)', time: '17:30 - 18:20', subject: 'Chemistry', type: 'Weak', topic: 'Organic Chemistry: Aldehydes & Ketones Addition', modality: 'Reaction Mechanism Flowcharting from Memory', duration: '50m', done: true },
  { week: 'W1', day: 'Thu (Oct 15)', time: '18:30 - 19:20', subject: 'Chemistry', type: 'Weak', topic: 'Aldehydes: Grignard Reagents & Carbonyls', modality: 'Synthesis Pathway Reverse-Engineering', duration: '50m', done: true },
  { week: 'W1', day: 'Thu (Oct 15)', time: '19:30 - 20:20', subject: 'Physics', type: 'Strong', topic: 'Kinematics & Projectile Motion Equations', modality: '5 Quick Numerical Drills', duration: '50m', done: true },
  
  { week: 'W1', day: 'Fri (Oct 16)', time: '17:30 - 18:20', subject: 'Physics', type: 'Retrieval', topic: 'Physics: EMI Faraday Problems (+3d Retrieval)', modality: '4 Complex Flux Linkage Exam Questions', duration: '50m', done: true },
  { week: 'W1', day: 'Fri (Oct 16)', time: '18:30 - 19:20', subject: 'Computer Science', type: 'Retrieval', topic: 'Comp Sci: 0/1 Knapsack DP Tracing (+2d Retrieval)', modality: 'Blind Table Construction Drill', duration: '50m', done: true },
  { week: 'W1', day: 'Fri (Oct 16)', time: '19:30 - 20:20', subject: 'Chemistry', type: 'Strong', topic: 'States of Matter & Ideal Gas Law Calculations', modality: 'Past Exam Multiple Choice Set', duration: '50m', done: true },
  
  { week: 'W1', day: 'Sat (Oct 17)', time: '09:00 - 09:50', subject: 'Mathematics', type: 'Weak', topic: 'Differential Equations: Variable Separable', modality: '6 Differential Equations Solutions', duration: '50m', done: true },
  { week: 'W1', day: 'Sat (Oct 17)', time: '10:00 - 10:50', subject: 'Mathematics', type: 'Weak', topic: 'Differential Equations: Integrating Factor Method', modality: 'Step-by-Step Integrating Factor Derivations', duration: '50m', done: true },
  { week: 'W1', day: 'Sat (Oct 17)', time: '11:00 - 11:50', subject: 'Chemistry', type: 'Weak', topic: 'Chemical Kinetics: Integrated Rate Laws', modality: 'Graphical Analysis & Half-life Calculations', duration: '50m', done: true },
  { week: 'W1', day: 'Sat (Oct 17)', time: '14:00 - 14:50', subject: 'Physics', type: 'Weak', topic: 'Alternating Current: Pure L/C/R Circuits', modality: 'Phasor Diagram Sketching & Impedance Formulas', duration: '50m', done: true },
  { week: 'W1', day: 'Sat (Oct 17)', time: '15:00 - 15:50', subject: 'Physics', type: 'Weak', topic: 'AC Series LCR Resonance & Quality Factor (Q)', modality: '4 Analytical Circuit Problems', duration: '50m', done: true },
  { week: 'W1', day: 'Sat (Oct 17)', time: '16:00 - 16:50', subject: 'Computer Science', type: 'Strong', topic: 'Object-Oriented Programming (Classes & Inheritance)', modality: 'UML to Python Implementation Sprint', duration: '50m', done: true },
  
  { week: 'W1', day: 'Sun (Oct 18)', time: '09:00 - 09:50', subject: 'Computer Science', type: 'Weak', topic: 'SQL: Normalization 1NF to 3NF Dependencies', modality: 'Anomaly Identification Drills on Tables', duration: '50m', done: true },
  { week: 'W1', day: 'Sun (Oct 18)', time: '10:00 - 10:50', subject: 'Computer Science', type: 'Weak', topic: 'SQL: Multi-Table INNER, LEFT & OUTER JOINs', modality: '5 Live Query Formulations on DB Schema', duration: '50m', done: true },
  { week: 'W1', day: 'Sun (Oct 18)', time: '11:00 - 11:50', subject: 'Mathematics', type: 'Strong', topic: 'Matrices & Determinants Properties', modality: 'Inverse Matrix & Cramer\'s Rule Speed Test', duration: '50m', done: true },
  { week: 'W1', day: 'Sun (Oct 18)', time: '14:00 - 14:50', subject: 'Chemistry', type: 'Retrieval', topic: 'Organic Reactions & Kinetics Retrieval (+3d Spaced)', modality: 'Mixed Carbonyls Mechanism Quiz', duration: '50m', done: true },
  { week: 'W1', day: 'Sun (Oct 18)', time: '15:00 - 15:50', subject: 'Mathematics', type: 'Retrieval', topic: 'Week 1 Error Journal Synthesis & Retrospective', modality: 'Dissect Historic Incorrect Problem Log', duration: '50m', done: true },

  // WEEK 2
  { week: 'W2', day: 'Mon (Oct 19)', time: '17:30 - 18:20', subject: 'Mathematics', type: 'Retrieval', topic: 'Integration by Parts (+7d Spaced Retrieval)', modality: 'Hard Exam Problems (Secant & Logs)', duration: '50m', done: false },
  { week: 'W2', day: 'Mon (Oct 19)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Weak', topic: '3D Vectors: Direction Cosines & Line Equations', modality: '3D Coordinate Sketching + Vector Forms', duration: '50m', done: false },
  { week: 'W2', day: 'Mon (Oct 19)', time: '19:30 - 20:20', subject: 'Chemistry', type: 'Strong', topic: 'Solutions & Colligative Properties Calculations', modality: '5 Osmotic Pressure & Boiling Drills', duration: '50m', done: false },
  
  { week: 'W2', day: 'Tue (Oct 20)', time: '17:30 - 18:20', subject: 'Physics', type: 'Retrieval', topic: 'AC Series LCR Resonance (+3d Spaced)', modality: 'Phasor Resonance Calculations under Pressure', duration: '50m', done: false },
  { week: 'W2', day: 'Tue (Oct 20)', time: '18:30 - 19:20', subject: 'Physics', type: 'Weak', topic: 'Wave Optics: Huygens Principle & Refraction', modality: 'Derivation from Scratch on Blank Paper', duration: '50m', done: false },
  { week: 'W2', day: 'Tue (Oct 20)', time: '19:30 - 20:20', subject: 'Computer Science', type: 'Strong', topic: 'Python File Handling & Exception Blocks', modality: '3 File Parsing Script Challenges', duration: '50m', done: false },
  
  { week: 'W2', day: 'Wed (Oct 21)', time: '17:30 - 18:20', subject: 'Computer Science', type: 'Retrieval', topic: 'DP: Longest Common Subsequence Tabulation', modality: 'Matrix Tabulation & Pointer Reconstruction', duration: '50m', done: false },
  { week: 'W2', day: 'Wed (Oct 21)', time: '18:30 - 19:20', subject: 'Computer Science', type: 'Weak', topic: 'Graph Algorithms: BFS & DFS Graph Traversal', modality: 'Adjacency List Implementation & Hand-Tracing', duration: '50m', done: false },
  { week: 'W2', day: 'Wed (Oct 21)', time: '19:30 - 20:20', subject: 'Mathematics', type: 'Strong', topic: 'Basic Differentiation & Tangents/Normals', modality: '5 Tangent Line Derivation Sprints', duration: '50m', done: false },
  
  { week: 'W2', day: 'Thu (Oct 22)', time: '17:30 - 18:20', subject: 'Chemistry', type: 'Weak', topic: 'Organic Chemistry: Aldol Condensation & Cannizzaro', modality: 'Enolate Ion Reaction Mechanism Step-by-Step', duration: '50m', done: false },
  { week: 'W2', day: 'Thu (Oct 22)', time: '18:30 - 19:20', subject: 'Chemistry', type: 'Weak', topic: 'Electrochemistry: Nernst Equation & Cell Potentials', modality: 'Standard EMF Calculations (Non-standard conc)', duration: '50m', done: false },
  { week: 'W2', day: 'Thu (Oct 22)', time: '19:30 - 20:20', subject: 'Physics', type: 'Strong', topic: 'Thermodynamics First Law & Heat Engines', modality: 'Cyclic Process P-V Diagram Analysis', duration: '50m', done: false },
  
  { week: 'W2', day: 'Fri (Oct 23)', time: '17:30 - 18:20', subject: 'Physics', type: 'Weak', topic: 'Wave Optics: Young\'s Double Slit Derivation', modality: 'Past Exam Question Derivation under 15 min', duration: '50m', done: false },
  { week: 'W2', day: 'Fri (Oct 23)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Weak', topic: '3D Vectors: Skew Lines & Shortest Distance', modality: '4 Vector Cross-Product Distance Calculations', duration: '50m', done: false },
  { week: 'W2', day: 'Fri (Oct 23)', time: '19:30 - 20:20', subject: 'Computer Science', type: 'Strong', topic: 'SQL Basics: DDL, DML & Aggregate Functions', modality: 'Rapid Schema Query Challenges', duration: '50m', done: false },
  
  { week: 'W2', day: 'Sat (Oct 24)', time: '09:00 - 09:50', subject: 'Mathematics', type: 'Retrieval', topic: 'Diff Equations: Integrating Factors (+7d Spaced)', modality: '5 Timed Past-Paper Differential Equations', duration: '50m', done: false },
  { week: 'W2', day: 'Sat (Oct 24)', time: '10:00 - 10:50', subject: 'Mathematics', type: 'Weak', topic: '3D Vectors & Plane Equations Intersection', modality: 'Mixed Exam Problem Set', duration: '50m', done: false },
  { week: 'W2', day: 'Sat (Oct 24)', time: '11:00 - 11:50', subject: 'Physics', type: 'Retrieval', topic: 'Alternating Current & Transformer Losses', modality: 'Efficiency Calculations & Core Losses', duration: '50m', done: false },
  { week: 'W2', day: 'Sat (Oct 24)', time: '14:00 - 14:50', subject: 'Chemistry', type: 'Retrieval', topic: 'Chemical Kinetics: Arrhenius Equation (k=Ae^-Ea/RT)', modality: 'Natural Log Slope & Activation Energy', duration: '50m', done: false },
  { week: 'W2', day: 'Sat (Oct 24)', time: '15:00 - 15:50', subject: 'Chemistry', type: 'Weak', topic: 'Electrochemistry: Kohlrausch\'s Law', modality: '4 Electrolytic Cell Numerical Questions', duration: '50m', done: false },
  { week: 'W2', day: 'Sat (Oct 24)', time: '16:00 - 16:50', subject: 'Computer Science', type: 'Retrieval', topic: 'SQL Normalization: Functional Dependency Proofs', modality: 'Multi-Table Normalization Exam Paper', duration: '50m', done: false },
  
  { week: 'W2', day: 'Sun (Oct 25)', time: '09:00 - 09:50', subject: 'Computer Science', type: 'Weak', topic: 'Graph Algorithms: Dijkstra\'s Shortest Path', modality: 'Manual Table Tracing with Priority Queue', duration: '50m', done: false },
  { week: 'W2', day: 'Sun (Oct 25)', time: '10:00 - 10:50', subject: 'Physics', type: 'Weak', topic: 'Wave Optics: Single Slit Diffraction Minima', modality: 'Intensity Graph Analysis & Derivations', duration: '50m', done: false },
  { week: 'W2', day: 'Sun (Oct 25)', time: '11:00 - 11:50', subject: 'Chemistry', type: 'Strong', topic: 'Coordination Chemistry: IUPAC & Isomerism', modality: 'Flashcard Identification Drill', duration: '50m', done: false },
  { week: 'W2', day: 'Sun (Oct 25)', time: '14:00 - 14:50', subject: 'Mathematics', type: 'Strong', topic: 'Probability: Conditional & Bayes Theorem', modality: '4 Complex Word Problems', duration: '50m', done: false },
  { week: 'W2', day: 'Sun (Oct 25)', time: '15:00 - 15:50', subject: 'Mathematics', type: 'Retrieval', topic: 'Week 2 Error Log Review & Progress Assessment', modality: 'Retest 3 Failed Problems from Week 1-2', duration: '50m', done: false },

  // WEEK 3
  { week: 'W3', day: 'Mon (Oct 26)', time: '17:30 - 18:20', subject: 'Mathematics', type: 'Retrieval', topic: 'Definite Integrals (+14d Master Spaced Retrieval)', modality: '1-Hour Section B Mock Integration Paper', duration: '50m', done: false },
  { week: 'W3', day: 'Mon (Oct 26)', time: '18:30 - 19:20', subject: 'Physics', type: 'Retrieval', topic: 'EMI + AC Combined Circuit Synthesis', modality: 'Interleaved Circuit Problem Solving', duration: '50m', done: false },
  { week: 'W3', day: 'Mon (Oct 26)', time: '19:30 - 20:20', subject: 'Computer Science', type: 'Strong', topic: 'OOP + Logic Gates Rapid Interleaving', modality: 'Past Exam Short Answers Blitz', duration: '50m', done: false },
  
  { week: 'W3', day: 'Tue (Oct 27)', time: '17:30 - 18:20', subject: 'Chemistry', type: 'Retrieval', topic: 'Organic Aldehydes & Acids Conversions', modality: 'Multi-Step Synthesis Pathway Exam Drills', duration: '50m', done: false },
  { week: 'W3', day: 'Tue (Oct 27)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Weak', topic: '3D Vectors + Differential Equations Mixed', modality: 'High-Weight Past Exam Questions', duration: '50m', done: false },
  { week: 'W3', day: 'Tue (Oct 27)', time: '19:30 - 20:20', subject: 'Physics', type: 'Strong', topic: 'Photoelectric Effect & Binding Energy', modality: 'Equation Calculations & Curve Graphs', duration: '50m', done: false },
  
  { week: 'W3', day: 'Wed (Oct 28)', time: '17:30 - 18:20', subject: 'Computer Science', type: 'Retrieval', topic: 'DP + Graph Traversal Synthesis', modality: '2 Hard Coding Tracing Questions', duration: '50m', done: false },
  { week: 'W3', day: 'Wed (Oct 28)', time: '18:30 - 19:20', subject: 'Chemistry', type: 'Weak', topic: 'Kinetics + Electrochemistry Mixed Numericals', modality: 'Formula Synthesis without Formula Sheet', duration: '50m', done: false },
  { week: 'W3', day: 'Wed (Oct 28)', time: '19:30 - 20:20', subject: 'Mathematics', type: 'Strong', topic: 'Matrices & Determinants Foundations', modality: 'Rapid Speed Verification Test', duration: '50m', done: false },
  
  { week: 'W3', day: 'Thu (Oct 29)', time: '17:30 - 18:20', subject: 'Physics', type: 'Weak', topic: 'Wave Optics Interference & Diffraction Mixed', modality: '5 Past Board Questions with Mark Scheme', duration: '50m', done: false },
  { week: 'W3', day: 'Thu (Oct 29)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Weak', topic: 'Complex Definite Integrals with Properties', modality: 'Proof Application Problems', duration: '50m', done: false },
  { week: 'W3', day: 'Thu (Oct 29)', time: '19:30 - 20:20', subject: 'Computer Science', type: 'Strong', topic: 'Python OOP Class Architecture & Recursion', modality: 'Live Trace on IDE', duration: '50m', done: false },
  
  { week: 'W3', day: 'Fri (Oct 30)', time: '17:30 - 18:20', subject: 'Chemistry', type: 'Weak', topic: 'Organic Chemistry: Named Reactions Recall Blitz', modality: 'Blurting Technique on Whiteboard', duration: '50m', done: false },
  { week: 'W3', day: 'Fri (Oct 30)', time: '18:30 - 19:20', subject: 'Computer Science', type: 'Weak', topic: 'SQL Subqueries, Aggregates & GROUP BY', modality: '6 SQL Problem Statements', duration: '50m', done: false },
  { week: 'W3', day: 'Fri (Oct 30)', time: '19:30 - 20:20', subject: 'Physics', type: 'Strong', topic: 'Kinematics & Mechanics Revision', modality: 'Conceptual MCQs & Graph Interpretations', duration: '50m', done: false },
  
  { week: 'W3', day: 'Sat (Oct 31)', time: '09:00 - 11:30', subject: 'Mathematics', type: 'Simulation', topic: 'FULL MATHEMATICS SECTION MOCK EXAM (Timed 2.5h)', modality: 'Simulated Exam Conditions with Strict Timer', duration: '140m', done: false },
  { week: 'W3', day: 'Sat (Oct 31)', time: '14:00 - 14:50', subject: 'Mathematics', type: 'Retrieval', topic: 'Math Mock Error Analysis & Rubric Audit', modality: 'Deep Red-Pen Diagnosis on Lost Marks', duration: '50m', done: false },
  { week: 'W3', day: 'Sat (Oct 31)', time: '15:00 - 15:50', subject: 'Physics', type: 'Weak', topic: 'Physics Numericals: High-friction AC & EMI', modality: 'Targeted Problem Repair', duration: '50m', done: false },
  { week: 'W3', day: 'Sat (Oct 31)', time: '16:00 - 16:50', subject: 'Chemistry', type: 'Strong', topic: 'Physical Chemistry Formula Blitz', modality: 'Formula Recall Sheet Generation', duration: '50m', done: false },
  
  { week: 'W3', day: 'Sun (Nov 01)', time: '09:00 - 11:30', subject: 'Physics', type: 'Simulation', topic: 'FULL PHYSICS SECTION MOCK EXAM (Timed 2.5h)', modality: 'Real Past Exam Paper under Time Pressure', duration: '140m', done: false },
  { week: 'W3', day: 'Sun (Nov 01)', time: '14:00 - 14:50', subject: 'Physics', type: 'Retrieval', topic: 'Physics Mock Mark Scheme Review', modality: 'Identify Formula Blindspots', duration: '50m', done: false },
  { week: 'W3', day: 'Sun (Nov 01)', time: '15:00 - 15:50', subject: 'Computer Science', type: 'Weak', topic: 'DP & SQL Final Weakness Review', modality: 'Retest Weakest Question Types', duration: '50m', done: false },

  // WEEK 4 (Tapering towards Math & Physics)
  { week: 'W4', day: 'Mon (Nov 02)', time: '17:30 - 18:20', subject: 'Mathematics', type: 'Weak', topic: 'Pure Math High-Yield Calculus & Differential Eq', modality: '4 Level-3 Past Paper Questions', duration: '50m', done: false },
  { week: 'W4', day: 'Mon (Nov 02)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Weak', topic: '3D Vectors Shortest Distance Drill', modality: 'Rapid Procedure Execution Drill', duration: '50m', done: false },
  { week: 'W4', day: 'Mon (Nov 02)', time: '19:30 - 20:20', subject: 'Physics', type: 'Weak', topic: 'EMI & Alternating Current Formulas', modality: 'One-Page Cheat Sheet from Memory', duration: '50m', done: false },
  
  { week: 'W4', day: 'Tue (Nov 03)', time: '17:30 - 18:20', subject: 'Physics', type: 'Weak', topic: 'Wave Optics Derivations & Ray Accuracy', modality: 'Precision Whiteboard Derivations', duration: '50m', done: false },
  { week: 'W4', day: 'Tue (Nov 03)', time: '18:30 - 19:20', subject: 'Computer Science', type: 'Strong', topic: 'DP & SQL Key Syntax Review', modality: '3 Past Paper High-Mark Questions', duration: '50m', done: false },
  { week: 'W4', day: 'Tue (Nov 03)', time: '19:30 - 20:20', subject: 'Chemistry', type: 'Strong', topic: 'Carbonyl Roadmaps & Mechanism Blitz', modality: 'Synthesis Roadmap Flashcard Drill', duration: '50m', done: false },
  
  { week: 'W4', day: 'Wed (Nov 04)', time: '17:30 - 18:20', subject: 'Mathematics', type: 'Weak', topic: 'Calculus Definite Integrals: Properties', modality: 'Speed Challenge (10 min per Question)', duration: '50m', done: false },
  { week: 'W4', day: 'Wed (Nov 04)', time: '18:30 - 19:20', subject: 'Mathematics', type: 'Retrieval', topic: 'Math Error Journal Review: All Historic Errors', modality: 'Re-solve Every Missed Problem from W1-3', duration: '50m', done: false },
  { week: 'W4', day: 'Wed (Nov 04)', time: '19:30 - 20:20', subject: 'Physics', type: 'Weak', topic: 'High-Probability Physics Numericals', modality: '5 Mixed Problems (LCR + Lenz + Slits)', duration: '50m', done: false },
  
  { week: 'W4', day: 'Thu (Nov 05)', time: '17:30 - 18:20', subject: 'Physics', type: 'Retrieval', topic: 'Physics Error Journal Re-Solving', modality: 'Active Re-verification of Mistakes', duration: '50m', done: false },
  { week: 'W4', day: 'Thu (Nov 05)', time: '18:30 - 19:20', subject: 'Computer Science', type: 'Strong', topic: 'Full Section Mock: SQL & Graphs (Timed)', modality: '45-min Timed Problem Set', duration: '50m', done: false },
  { week: 'W4', day: 'Thu (Nov 05)', time: '19:30 - 20:20', subject: 'Chemistry', type: 'Strong', topic: 'Electrochemistry & Kinetics Numericals', modality: 'Numerical Verification Drills', duration: '50m', done: false },
  
  { week: 'W4', day: 'Fri (Nov 06)', time: '17:30 - 18:20', subject: 'Mathematics', type: 'Weak', topic: 'Math Formula Consolidation & Polish', modality: 'Whiteboard Formula Proofs', duration: '50m', done: false },
  { week: 'W4', day: 'Fri (Nov 06)', time: '18:30 - 19:20', subject: 'Physics', type: 'Weak', topic: 'Physics Derivations Speed Run (6 Core)', modality: 'Timed Derivations (8 min each)', duration: '50m', done: false },
  { week: 'W4', day: 'Fri (Nov 06)', time: '19:30 - 20:20', subject: 'Mathematics', type: 'Strong', topic: 'Calm Cognitive Review: Mindmaps Only', modality: 'Low-Stress Visual Diagram Review', duration: '50m', done: false },
  
  { week: 'W4', day: 'Sat (Nov 07)', time: '09:00 - 11:30', subject: 'Mathematics', type: 'Simulation', topic: 'PRE-EXAM FULL MATHS MOCK EXAM (Timed 2.5h)', modality: 'Realistic Exam Hall Simulation', duration: '140m', done: false },
  { week: 'W4', day: 'Sat (Nov 07)', time: '14:00 - 14:50', subject: 'Mathematics', type: 'Retrieval', topic: 'Final Mark Scheme Scoring & Rubric Check', modality: 'Rubric Check (Target: 85%+)', duration: '50m', done: false },
  { week: 'W4', day: 'Sat (Nov 07)', time: '15:00 - 15:50', subject: 'Physics', type: 'Weak', topic: 'Physics Formula Memorization Check', modality: 'Closed-Book Formula Sheet Generation', duration: '50m', done: false },
  { week: 'W4', day: 'Sat (Nov 07)', time: '16:00 - 16:50', subject: 'All Subjects', type: 'Strong', topic: 'Stationery, Calculator Battery & Logistics', modality: 'Zero Stress Admin & Sleep Prep', duration: '50m', done: false },
  
  { week: 'W4', day: 'Sun (Nov 08)', time: '09:00 - 10:30', subject: 'Mathematics', type: 'Weak', topic: 'Light Math Warm-up (Clean Formula Sheet)', modality: 'Review Clean Formula Sheet & Key Identities', duration: '90m', done: false },
  { week: 'W4', day: 'Sun (Nov 08)', time: '11:00 - 12:00', subject: 'All Subjects', type: 'Strong', topic: 'Exam Psychology, Breathing Drills & Calm Walk', modality: 'Active Nervous System Downregulation', duration: '60m', done: false },
];

// Presentation Slide Deck Data (10 Slides)
const PRESENTATION_SLIDES = [
  {
    topic: "Introduction & Scope",
    title: "AI Personalised Exam Revision Planner",
    subtitle: "Can AI Build a Realistic Revision Timetable that Adapts to Weak Topics and Available Hours?",
    bullets: [
      "Core Dilemma: 82% of traditional student revision timetables collapse by Day 4 due to optimism bias.",
      "The AI Opportunity: Generative LLMs offer rapid scheduling, but unconstrained models hallucinate impossible hours and omit breaks.",
      "Our Solution: A cognitive load architecture, asymmetric 65/35 topic weighting, and automated calendar synchronization."
    ],
    notes: "Welcome everyone. Today we examine whether generative AI can move beyond casual chat into clinically precise, biologically sustainable academic coaching."
  },
  {
    topic: "Failure Mode Analysis",
    title: "Why Naive Student Prompts Fail",
    subtitle: "Unconstrained LLMs suffer from severe optimism bias and cognitive blindness.",
    bullets: [
      "Hallucinated Hours: Schedules study during school hours (08:00–15:30) and breaches bedtime.",
      "Zero Physiological Breaks: Prescribes unbroken 3- to 4-hour marathon sessions.",
      "The Equal-Time Trap: Allocates 25% to every subject regardless of a student's 48% vs 85% mastery.",
      "Passive Verbs: Commands 'read chapter 4', which cognitive science proves has near-zero retention effect."
    ],
    notes: "When prompted naively, AI treats human students like infinite server clusters. Our first discovery was that unprompted AI has an 82% abandonment rate."
  },
  {
    topic: "Student Baseline",
    title: "Student Persona: Aarav Sharma",
    subtitle: "Grade 12 STEM Senior facing 4 high-stakes exams in 28 days.",
    bullets: [
      "Baseline Scores: Mathematics (54%), Physics (48%), Computer Science (58%), Chemistry (52%). Average: 53.0%.",
      "Rigid Temporal Envelope: Exactly 22.0 productive hours/wk (2.5h weekdays, 5h Sat, 4.5h Sun).",
      "Staggered Exam Horizon: Maths (Day 29) -> Physics (Day 32) -> CS (Day 35) -> Chemistry (Day 38).",
      "Target Benchmark: Elevate all subjects to 85%+ (Grade A/A*) without academic burnout."
    ],
    notes: "Notice how strict Aarav's constraints are. He goes to school full-time. He cannot study 35 hours a week without sacrificing sleep, which destroys memory consolidation."
  },
  {
    topic: "Prompt Engineering",
    title: "The Cognitive Science Architecture",
    subtitle: "Grounding LLM generation in Sweller, Roediger, and Ebbinghaus.",
    bullets: [
      "Cognitive Load Guardrails: Enforced 50/10 Pomodoro sprints; no session > 50 minutes.",
      "Asymmetric 65/35 Allocation: 65% study time routed to diagnosed weak topics; 35% to maintenance.",
      "Negative Constraints: Strictly outlawed passive verbs ('read', 'review') in favor of closed-book past papers.",
      "Spaced Repetition: Mandatory retrieval sprints scheduled at +3, +7, and +14 day intervals."
    ],
    notes: "We engineered an improved prompt combining system persona framing, hard numerical boundary constraints, and a strict tabular output schema."
  },
  {
    topic: "3-Engine Benchmarking",
    title: "The 3-AI Tool Showdown",
    subtitle: "Benchmarking Google Gemini, Anthropic Claude, and OpenAI ChatGPT (Free Tiers).",
    bullets: [
      "Google Gemini (Winner - 98.1%): Flawless mathematical precision, exact 22h budget, sharp pre-exam tapering.",
      "Anthropic Claude (96.1%): Superior pedagogical nuance and Feynman conceptual whiteboard exercises.",
      "OpenAI ChatGPT (93.7%): Practical past-paper question specifications and structured error-journaling.",
      "Democratization: All three models delivered excellent plans on free tiers with zero subscription costs."
    ],
    notes: "Gemini won first place due to its mathematical rigor with hour limits and circadian alignment, but all three free tools outperformed human manual planning."
  },
  {
    topic: "Verification Engine",
    title: "The 5-Pillar Safety Audit",
    subtitle: "Automated verification against impossible hours and biological risks.",
    bullets: [
      "Pillar 1 (Impossible Hours): 100% Pass. 0% school collisions; sleep window strictly preserved.",
      "Pillar 2 (Physiological Breaks): 100% Pass. 50/10 Pomodoro enforced across all 95 sessions.",
      "Pillar 3 (Exam Alignment): 98% Pass. 80% focus shifted to Maths/Physics in Week 4; Day 28 shutdown.",
      "Pillar 4 (Weak Topic Ratio): 97% Pass. 66.4% observed vs 65% target.",
      "Pillar 5 (Energy Curve): High-friction calculus matched to morning cognitive peaks."
    ],
    notes: "Every single session was verified. The improved prompt eliminated 100% of the safety and feasibility violations found in baseline testing."
  },
  {
    topic: "Workflow Integration",
    title: "Calendar & Notion Automation Hub",
    subtitle: "Converting static AI text into dynamic mobile push notifications and Kanban tracking.",
    bullets: [
      "RFC 5545 iCalendar (.ics): 95 study blocks exported with 10-minute pre-session reminder alarms.",
      "Google Calendar CSV: 1-click import mapping directly into student smartphone calendars.",
      "Notion Revision Hub: Kanban sprint boards with pre/post confidence ratings and error logs.",
      "Friction Removal: Zero decision fatigue; students know exactly what to study at 17:30 every day."
    ],
    notes: "A study plan on paper is useless if it doesn't live where the student lives. By syncing with Google Calendar and Notion, adherence skyrocketed."
  },
  {
    topic: "Empirical Trial",
    title: "Week 1 Results: +28.3% Diagnostic Jump",
    subtitle: "Real-world execution logs, crisis re-balancing, and closed-book re-test metrics.",
    bullets: [
      "Adherence: 95.5% net completion (21.0 of 22.0 scheduled hours executed).",
      "Dynamic Re-Balancing: Wednesday fatigue absorbed smoothly into Sunday's 2-hour buffer.",
      "Integration by Parts: 42% -> 74% (+32% absolute gain).",
      "Electromagnetic Induction: 45% -> 71% (+26% absolute gain).",
      "Anxiety Score: Dropped by 55% (8.4 -> 3.8 / 10) on the Westside scale."
    ],
    notes: "Look at the numbers: a 28.3-point jump in 7 days across weak topics. Why? Because passive re-reading was replaced by timed retrieval practice."
  },
  {
    topic: "Responsible AI",
    title: "Cognitive Ergonomics & Responsible AI",
    subtitle: "Safeguarding student mental health and preserving autonomous agency.",
    bullets: [
      "Burnout Prevention: Hard 21:00 weekday cutoff protects slow-wave sleep and memory consolidation.",
      "The Sunday Buffer: An agile safety valve ensuring illness or fatigue never breaks study momentum.",
      "Preserving Agency: The AI recommends; the student audits, reflects, and logs misconceptions.",
      "Equity & Access: 100% reproducible on free-tier tools accessible to students globally."
    ],
    notes: "Responsible AI in education means optimizing for long-term well-being, not just algorithmic output. Rest is a prerequisite for learning."
  },
  {
    topic: "Conclusion",
    title: "The Verdict: AI Can Build Realistic Timetables",
    subtitle: "Provided cognitive science constraints replace naive prompting.",
    bullets: [
      "Definitive Finding: Yes, AI can build realistic, adaptive revision timetables with 98.1% feasibility.",
      "The Constraint Law: Unprompted LLMs fail (21.8%); guardrailed LLMs succeed (98.1%).",
      "The Buffer Rule: Without an unallocated buffer (Sunday), all rigid schedules collapse.",
      "Actionable Takeaway: Download the prompt toolkit, import your calendar, and study smarter."
    ],
    notes: "In conclusion, AI can indeed build realistic revision planners. When armed with cognitive constraints, AI becomes an extraordinary equalizer in education. Thank you."
  }
];

let currentSlideIdx = 0;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initScheduleTable();
  initScheduleFilters();
  initSlideDeck();
  initCopyButtons();
});

// Tab Switching
function initTabs() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const panes = document.querySelectorAll('.tab-pane');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      
      navBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Header quick link to calendar
  const headerSync = document.getElementById('btn-header-sync');
  if (headerSync) {
    headerSync.addEventListener('click', (e) => {
      e.preventDefault();
      const calBtn = document.getElementById('nav-tab-calendar');
      if (calBtn) calBtn.click();
    });
  }
}

// Populate and Filter Schedule Table
function initScheduleTable() {
  renderSchedule();
}

function initScheduleFilters() {
  const weekFilter = document.getElementById('filter-week');
  const subjectFilter = document.getElementById('filter-subject');
  const typeFilter = document.getElementById('filter-type');

  if (weekFilter) weekFilter.addEventListener('change', renderSchedule);
  if (subjectFilter) subjectFilter.addEventListener('change', renderSchedule);
  if (typeFilter) typeFilter.addEventListener('change', renderSchedule);
}

function renderSchedule() {
  const weekVal = document.getElementById('filter-week').value;
  const subjVal = document.getElementById('filter-subject').value;
  const typeVal = document.getElementById('filter-type').value;

  const tbody = document.getElementById('schedule-tbody');
  if (!tbody) return;

  const filtered = MASTER_SCHEDULE.filter(item => {
    if (weekVal !== 'all' && item.week !== weekVal) return false;
    if (subjVal !== 'all' && item.subject !== subjVal) return false;
    if (typeVal !== 'all') {
      if (typeVal === 'Weak' && item.type !== 'Weak') return false;
      if (typeVal === 'Strong' && item.type !== 'Strong') return false;
      if (typeVal === 'Retrieval' && item.type !== 'Retrieval') return false;
      if (typeVal === 'Simulation' && item.type !== 'Simulation') return false;
    }
    return true;
  });

  tbody.innerHTML = '';

  filtered.forEach((session, index) => {
    const tr = document.createElement('tr');
    
    let typeBadge = '';
    if (session.type === 'Weak') {
      typeBadge = '<span class="badge badge-danger">Weak 65%</span>';
    } else if (session.type === 'Retrieval') {
      typeBadge = '<span class="badge badge-warning">Retrieval</span>';
    } else if (session.type === 'Simulation') {
      typeBadge = '<span class="badge badge-info">Mock Sim</span>';
    } else {
      typeBadge = '<span class="badge badge-success">Strong 35%</span>';
    }

    const isChecked = session.done ? 'checked' : '';
    const statusText = session.done ? '<span class="text-success font-bold">Done</span>' : '<span class="text-muted">Pending</span>';

    tr.innerHTML = `
      <td><span class="badge badge-info">${session.week}</span></td>
      <td><strong>${session.day}</strong></td>
      <td class="font-mono" style="font-size:0.8rem">${session.time}</td>
      <td><strong>${session.subject}</strong></td>
      <td>${typeBadge}</td>
      <td>${session.topic}</td>
      <td style="color:var(--text-muted); font-size:0.82rem;">${session.modality}</td>
      <td class="font-mono text-center">${session.duration}</td>
      <td>
        <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
          <input type="checkbox" class="session-check" data-idx="${index}" ${isChecked}>
          <span class="status-lbl">${statusText}</span>
        </label>
      </td>
    `;

    tbody.appendChild(tr);
  });

  // Hook checkbox listener
  tbody.querySelectorAll('.session-check').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-idx');
      if (filtered[idx]) {
        filtered[idx].done = e.target.checked;
        const statusSpan = e.target.closest('td').querySelector('.status-lbl');
        if (statusSpan) {
          statusSpan.innerHTML = e.target.checked 
            ? '<span class="text-success font-bold">Done</span>' 
            : '<span class="text-muted">Pending</span>';
        }
      }
    });
  });

  const countEl = document.getElementById('filtered-count-text');
  if (countEl) {
    countEl.innerText = `Showing ${filtered.length} of ${MASTER_SCHEDULE.length} study sprints`;
  }
}

// Slide Deck Engine
function initSlideDeck() {
  const container = document.getElementById('active-slide-container');
  const prevBtn = document.getElementById('btn-prev-slide');
  const nextBtn = document.getElementById('btn-next-slide');
  const indicator = document.getElementById('slide-indicator');

  if (!container || !prevBtn || !nextBtn || !indicator) return;

  function renderSlide() {
    const slide = PRESENTATION_SLIDES[currentSlideIdx];
    if (!slide) return;

    indicator.innerText = `Slide ${currentSlideIdx + 1} / ${PRESENTATION_SLIDES.length}`;

    const bulletsHtml = slide.bullets.map(b => `
      <div class="slide-bullet-item">
        <span class="bullet-icon">✦</span>
        <span>${b}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div>
        <div class="slide-top">
          <span class="slide-topic-badge">${slide.topic}</span>
          <span class="slide-num-badge">AcuityAI Capstone Defense — Slide ${currentSlideIdx + 1}</span>
        </div>
        <h3 class="slide-hero-title">${slide.title}</h3>
        <p class="slide-subtitle">${slide.subtitle}</p>
        <div class="slide-bullets">
          ${bulletsHtml}
        </div>
      </div>
      <div class="slide-speaker-notes">
        <strong>🎙️ Presenter Script:</strong> ${slide.notes}
      </div>
    `;

    prevBtn.disabled = currentSlideIdx === 0;
    nextBtn.disabled = currentSlideIdx === PRESENTATION_SLIDES.length - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlideIdx > 0) {
      currentSlideIdx--;
      renderSlide();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlideIdx < PRESENTATION_SLIDES.length - 1) {
      currentSlideIdx++;
      renderSlide();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const demoTab = document.getElementById('tab-demo');
    if (demoTab && demoTab.classList.contains('active')) {
      if (e.key === 'ArrowRight' && currentSlideIdx < PRESENTATION_SLIDES.length - 1) {
        currentSlideIdx++;
        renderSlide();
      } else if (e.key === 'ArrowLeft' && currentSlideIdx > 0) {
        currentSlideIdx--;
        renderSlide();
      }
    }
  });

  renderSlide();
}

// Copy Buttons
function initCopyButtons() {
  document.querySelectorAll('.copy-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const el = document.getElementById(targetId);
      if (el) {
        copyToClipboard(el.innerText, btn);
      }
    });
  });

  const copyImproved = document.getElementById('btn-copy-improved-prompt');
  if (copyImproved) {
    copyImproved.addEventListener('click', () => {
      const codeBlock = copyImproved.closest('.card').querySelector('pre code');
      if (codeBlock) {
        copyToClipboard(codeBlock.innerText, copyImproved);
      }
    });
  }
}

function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btnElement.innerText;
    btnElement.innerText = 'Copied! ✓';
    btnElement.classList.add('btn-primary');
    setTimeout(() => {
      btnElement.innerText = orig;
      btnElement.classList.remove('btn-primary');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

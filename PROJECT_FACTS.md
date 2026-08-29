# PROJECT FACTS — verified content

Everything in this file has been checked against the source reports. **Treat it as
the single source of truth.** If a draft of the site disagrees with this file, this
file is right.

Do not "improve" numbers, invent metrics, or soften the outcomes described here.

---

## Person

- **Om Manish Patel**, aerospace engineer
- B.S. Aerospace Engineering, University of South Carolina, **graduated May 2026**, GPA 3.25
- Columbia, SC · U.S. Citizen
- omptlsc@gmail.com · (843) 940-0118 · linkedin.com/in/ompatel50
- **Currently employed** as Maintenance Technician at EZ-Stop, Ridgeland SC
  (June 2020 – Present; promoted from Assistant Maintenance Technician May 2026)
- Seeking full-time propulsion, fluids, or structures roles

He has **graduated**. Never write "senior," "graduating May 2026," or
"available from May 2026." Six years of maintenance experience, not five.

---

## Projects

### 1. High-Altitude Balloon Flight System (Senior Design, Spring 2026)
Tools: CATIA V5, Python, Arduino. Role: mechanical design and integration lead.

Recoverable 30 km payload — structural, thermal, avionics, telemetry, power, and
recovery subsystems. Fully built, integrated, and ground-tested in 16 weeks.

**Outcome — state this plainly, do not soften or omit:**
- **The article never flew.** ATC denied airspace access on the launch date and a
  NOTAM was not secured in time, following procurement and budget delays.
- 11 of 22 system requirements fully verified; 4 partially verified
- The two altitude-dependent requirements (altitude achievement, ascent rate)
  could not be assessed without flight — both depend on in-flight GPS data
- Budget constraint **not met**: final cost exceeded $1,500
- 16-week schedule **was** met; remaining nine constraints met
- Designed to FAA Part 101 and FCC Part 15

Ground verification campaign actually completed:
- ~7 hours continuous endurance and data-logging test
- RFM95W LoRa telemetry: 1 Hz packets received at test range, content intact
- Parachute drop test: correct deployment, controlled stable descent
- Suspension load test: no deformation or failure
- Cold soak: all sensors and Raspberry Pi initialized after cold exposure
  (lab equipment could not reach the full −70 °C target)
- GPS ground accuracy: NEO-M8N and u-blox M10 both within ±10 m
- Software verification: SPI, I2C, UART confirmed; fault handling reviewed

Team retrospective points: build launch contingency into the schedule from the
start; coordinate with ATC early rather than treating clearance as a formality;
order long-lead components earlier (GPS shipping delay cost 1–2 weeks); track
budget continuously.

### 2. Multi-System Propulsion CFD Analysis (Fall 2025, AESP 314)
Tools: ANSYS Fluent, MATLAB.

Ramjet, chemical rocket, and resistojet in 2D reacting-flow geometries.
k-ω SST turbulence, finite-rate/eddy-dissipation combustion, mesh-independence
study across five densities.

Ramjet results:

| Case | Mach | Fuel | F/A | Thrust (N) | TSFC (kg/N·s) | Isp (s) |
|---|---|---|---|---|---|---|
| 1 | 1.5 | H₂ | 0.05 | 28,422 | 1.26e-4 | 580 |
| 2 | 2.0 | CH₄ | 0.20 | 54,835 | 3.85e-4 | 279 |
| 3 | 2.0 | H₂ | 0.05 | 48,261 | 1.04e-4 | 984 |
| 4 | 3.0 | CH₄ | 0.20 | 117,854 | 1.70e-4 | 601 |
| 5 | 3.0 | H₂ | 0.05 | 122,211 | 4.03e-5 | 2,492 |

Chemical rocket Isp: CR1 98.5 s, CR2 121.2 s, CR3 88.1 s, CR4 19.9 s,
CR5 99.5 s, CR6 47.4 s. TSFC and C_F are **not computable** from the recorded
data (fuel-only mass flow and throat area were not logged) — say so, do not
invent them.

Findings: hydrogen at Mach 3 gave highest thrust and Isp; methane showed
incomplete combustion at high F/A; Mach 3 inlet shocks caused excessive
stagnation pressure loss; lean hydrogen in a 5 m chamber was the best rocket case;
over-rich hydrogen (CR4) performed worst.

### 3. General Aviation Aircraft — Conceptual Design (Fall 2025, AESP 415)
Tools: CATIA V5, MATLAB, JavaFoil. FAR Part 23.

4-seat GA aircraft. Selected configuration: low-wing T-tail.
- Range 1,600 km · Cruise 77.2 m/s (150 KTAS) · Cruise altitude 2,440 m
- Takeoff distance 410 m (1,340 ft) · MTOW 1,361 kg (3,000 lb)

W/S–W/P constraint sizing, component drag buildup, Breguet range trade study,
CG estimation, tail sizing, scissor plot. Configurations compared: high-wing
conventional, low-wing T-tail (selected), pusher-prop unconventional.

### 4. Structural Beam Design and FEA Validation (Fall 2024)
Tool: Abaqus.

- **Factor of safety: 3.4** — never write 16,881; that figure in the original
  report was wrong and has been corrected
- Final mass **0.974 lbf** against a strict 1 lbf limit
- FEA deflection validated against three-point bending to **within 4.2%**, loads
  up to 6,250 lbf
- Compliance: ~4.8e-6 in/lbf simulated vs ~5.0e-6 in/lbf measured
- Manufacturing cost $789.67 against a $600 target — **not met**
- Mass reduction via strategic lightening holes in low-stress web regions
- Hourglassing persisted under mesh refinement, localizing the artifact to
  element formulation rather than mesh density
- CNC fabricated with a partner institution; team project

### 5. Aerodynamic Analysis of NACA Airfoils Using CFD (Fall 2024, AESP 265)
Tool: ANSYS Fluent. Note: **Fall 2024, AESP 265** — not Fall 2025, not AESP 314.

NACA 0012, 4412, 6418 swept −6° to 18°, 20 m/s freestream.

The originally reported coefficients were normalized against Fluent's default
1 m² reference area instead of the true ~25 mm chord. Corrected by a factor of
40.1, validated independently against Reynolds number:
- **Re ≈ 3.4 × 10⁴**
- Corrected c_l,max: **0.891** (0012), **1.289** (4412), **1.418** (6418)
- Stall onset ~12° for all three
- 6418 retains attached flow to 18°; 0012 separates earliest
- Moment coefficients are **uncorrected and unreliable** (Fluent's default moment
  center is the origin, not the quarter chord) — do not quote them

### 6. Circuit Characterization and Filter Design (Spring 2024, ELCT 221)
Tools: LTspice, ADALM2000.

- RC: R = 100 Ω, C = 0.1 µF, theoretical τ = 10 µs, **measured 9.573 µs**
- RL: R = 100 Ω, L = 1 mH, theoretical τ = 10 µs, **measured 8.969 µs**
- Low-pass and high-pass cutoff: 15.92 kHz
- RLC bandpass: f_R = 15,915 Hz, B = 100 kHz, Q = 0.159

**No report PDF is available for this project.** Do not link a download.

---

## Laboratory experience

AESP 361 Aerospace Laboratory I (Spring 2025): uncertainty analysis, hardness
testing, flight simulator, bending and torsion, strain gauges, motion lab,
tensile testing, **wind tunnel force-balance testing**, manufacturing.

AESP 362 Aerospace Laboratory II (Fall 2025): structural dynamics (Euler
buckling across four boundary conditions, modal analysis, damping, LabVIEW DAQ),
heat transfer (Armfield conduction, C-Therm TCi, free and forced convection,
lumped capacitance), numerical methods (Fluent porous media, Darcy–Forchheimer,
discrete phase particle tracking), pipe flow, **VARTM composites** (permeability
by Darcy's law, fiber volume fraction, porosity).

Statistical uncertainty analysis with t-distribution confidence intervals appears
across multiple labs.

**No wind tunnel report exists** — the lab was performed but the writeup isn't
available. List it as a skill; do not link a download.

---

## Skills

**Propulsion & fluids** — propulsion system sizing, thermodynamic cycle analysis,
reacting flow simulation, combustion modeling, CFD (ANSYS Fluent), porous-media
flow (Darcy–Forchheimer), internal and pipe flow, fuel system safing

**Structures & materials** — stress/deflection analysis, FEA (Abaqus), Euler
buckling, modal analysis and damping, structural margins, load path evaluation,
tensile and hardness testing

**Testing & instrumentation** — subsonic wind tunnel force-balance testing,
pitot-static velocimetry, three-point bending, strain gauges, steady-state and
transient thermal measurement, LabVIEW data acquisition, uncertainty analysis
with t-distribution confidence intervals

**Manufacturing** — VARTM composite layup and permeability characterization,
CNC machining, GD&T, 2D drawings

**CAD & software** — CATIA V5, Creo Parametric, SolidWorks, MATLAB/Simulink,
Python, LabVIEW, Arduino

**Systems engineering** — requirements traceability, verification planning, trade
studies, N² interface analysis, risk analysis, FAA Part 101 / FCC Part 15

---

## Assets — do not regenerate or replace

| File | What it is |
|---|---|
| `assets/Om_Patel_Resume.pdf` | Current resume |
| `assets/habsat-report.pdf` | AESP 428 **Design & Verification Report** (DVR), 114 p |
| `assets/aircraft-design-report.pdf` | AESP 415 Conceptual Design Report, 120 p |
| `assets/propulsion-report.pdf` | Rebuilt propulsion report, 15 p |
| `assets/cfd-report.pdf` | Rebuilt airfoil CFD report, 10 p |
| `assets/structural-beam-report.pdf` | Rebuilt beam report, 8 p |
| `assets/headshot.jpg` | Portrait |

**All published PDFs have student ID numbers removed.** The HABSAT and aircraft
design reports are team documents carrying other students' names and IDs. Never
republish an unredacted version, and never add report PDFs from any other source.

There is no electrical report and no wind tunnel report. Do not link to either.

---

## Note on this copy

The five report PDFs are absent from this bundle — see `assets/PDFS_MISSING.md`.
Keep the links and filenames exactly as they are; the files get restored before
deployment.

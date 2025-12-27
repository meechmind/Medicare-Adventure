
import type { Scenario } from './types.ts';

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Working Older Adult",
    subtitle: "Turning 65",
    character: "Martha",
    intro: "Martha is turning 65 and works at a company with 50 employees. She loves her job, the insurance is great, and she has no plans to retire yet. What should she do about Medicare?",
    choices: [
      {
        id: 1,
        title: "Delay Medicare Enrollment Completely",
        subtitle: "I'll stick with just my work plan.",
        outcome: {
          result: "Not bad, but you left 'free' on the table.",
          clarification: "Since your employer has more than 20 employees, your employer coverage is primary. You aren't penalized for delaying, but you missed out on Part A, which is usually premium-free and could have acted as secondary coverage for hospital stays.",
          keyTakeaways: [
            "<strong>The >20 Rule:</strong> Because the employer has 20+ employees, the group health plan pays first. Martha can delay Part B without penalty.",
            "<strong>Part A is (Usually) Free:</strong> For most, Part A costs $0. It's often worth enrolling even if working, to have secondary hospital coverage.",
            "<strong>Special Enrollment Period (SEP):</strong> When you retire, you will have an 8-month SEP to pick up Part B without penalty.",
            "<strong>Check with HR:</strong> Always check with HR to see how the employer coverage works with Medicare. For example, High Deductible plans (HSAs) have conflicts with Part A enrollment.",
            "<strong>The <20 Danger:</strong> If the employer had *fewer* than 20 employees, Medicare would be primary. Delaying then would be a disaster (penalties + coverage gaps).",
          ],
        },
      },
      {
        id: 2,
        title: "Enroll in Part A, Delay Part B",
        subtitle: "Take the free stuff, skip the bill.",
        outcome: {
          result: "The smart 'Goldilocks' move!",
          clarification: "Perfect. You took Part A because it's free (secondary coverage for hospital stays) but delayed Part B to save the premium ($202.90/month). Since your employer has >20 employees, they pay primary anyway.",
          keyTakeaways: [
            "<strong>The >20 Rule:</strong> Employers with 20+ employees have primary coverage, making it safe to delay Part B.",
            "<strong>Special Enrollment Period (SEP):</strong> When you retire, you will have an 8-month SEP later to add Part B without penalty.",
            "<strong>Check with HR:</strong> Always check with HR to see how the employer coverage works with Medicare. For example, High Deductible plans (HSAs) have conflicts with Part A enrollment.",
            "<strong>If <20 Employees:</strong> This would be the wrong move. You would have needed Part B immediately as Medicare would be primary.",
          ],
        },
      },
      {
        id: 3,
        title: "Enroll in Medicare Parts A & B",
        subtitle: "Isn't it required?",
        outcome: {
          result: "Safe, but you're paying for redundancy.",
          clarification: "You are fully covered, but since your employer has >20 employees, they pay primary and Medicare is only secondary. You're paying the Part B premium ($202.90/mo) for coverage that might not pay out much after your work insurance pays.",
          keyTakeaways: [
            "<strong>Cost vs. Benefit:</strong> It's usually not cost-effective to pay Part B premiums if you have good large-employer coverage.",
            "<strong>Special Enrollment Period (SEP):</strong> Even if you delayed, you would get an 8-month SEP to enroll later without penalty.",
            "<strong>Check with HR:</strong> Always check with HR to see how the employer coverage works with Medicare. For example, High Deductible plans (HSAs) have conflicts with Part A enrollment.",
            "<strong>The <20 Rule:</strong> This would have been the *correct* choice if the employer was small (<20 employees), as Medicare would be primary.",
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: "Fork in the Road",
    subtitle: "Medicare Advantage vs. Original Medicare",
    character: "Robert",
    intro: "Robert, a healthy retiree in Annapolis, is choosing his coverage. He hates surprise bills but also wants value. What's his best bet?",
    choices: [
      {
        id: 1,
        title: "Choose Medicare Advantage (HMO)",
        subtitle: "Low premium, all-in-one.",
        outcome: {
          result: "Low premiums, but network restrictions.",
          clarification: "You save on monthly premiums, but you must use the plan's network. Out-of-network care is generally not covered. Good for those who don't mind staying in-network.",
          keyTakeaways: [
            "<strong>MA Trade-off:</strong> You trade lower upfront costs for network restrictions and potential copays. Medicare Advantage often requires prior authorization for services and a referral to see a specialist.",
            "<strong>Original Medicare's Flexibility:</strong> With Original Medicare, you could see any doctor that accepts Medicare nationwide, without referrals.",
            "<strong>No Medigap for MA:</strong> You cannot buy a Medigap policy to cover Medicare Advantage costs like copays or coinsurance.",
            "<strong>Did you know?:</strong> In Maryland, if you have a Medigap policy, you can switch to a plan of equal or lesser benefits without health questions once a year starting on your birthday and ending 30 days after.",
          ],
        },
      },
      {
        id: 2,
        title: "Choose Original Medicare + Part D",
        subtitle: "Freedom of choice.",
        outcome: {
          result: "Freedom of choice, but predictability issues.",
          clarification: "You can see any doctor that takes Medicare, but you are liable for the 20% coinsurance on Medicare services with no annual cap.",
          keyTakeaways: [
            "<strong>The 20% Risk:</strong> Without a Medigap policy, an expensive surgery or long hospital stay could cost you thousands in coinsurance.",
            "<strong>Flexibility:</strong> Original Medicare typically doesn’t require prior authorization for services or a referral to see a specialist.",
            "<strong>The Medigap Solution:</strong> For an additional monthly premium, a Medigap policy would cover that 20%, providing a safety net against unpredictable, high costs.",
            "<strong>Birthday Rule:</strong> In Maryland, if you have a Medigap policy, you can switch to a plan of equal or lesser benefits without health questions once a year starting on your birthday and ending 30 days after.",
          ],
        },
      },
      {
        id: 3,
        title: "Original Medicare + Part D + Medigap",
        subtitle: "most coverage, higher price.",
        outcome: {
          result: "Maximum flexibility & predictable costs, but high monthly payment.",
          clarification: "You have the 'Cadillac' coverage. You can see any doctor, and Medigap pays your 20% coinsurance. However, you are paying a significant monthly premium for that Medigap policy on top of your Part B premium.",
          keyTakeaways: [
            "<strong>Predictability:</strong> Almost zero for doctors/hospitals provides peace of mind.",
            "<strong>Cost:</strong> This is the most expensive monthly option for premiums, but the safest for heavy healthcare users or those who want maximum predictability.",
            "<strong>Birthday Rule:</strong> In Maryland, if you have a Medigap policy, you can switch to a plan of equal or lesser benefits without health questions once a year starting on your birthday and ending 30 days after.",
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: "Part D Panic",
    subtitle: "Rx plan is ending",
    character: "Sarah",
    intro: "It's late November and Sarah is catching up on her mail. She finds a letter that her Part D plan is ending and won’t be offered next year. What should she do?",
    choices: [
      {
        id: 1,
        title: "Do Nothing",
        subtitle: "It'll be fine.",
        outcome: {
          result: "Coverage loss!",
          clarification: "If you do nothing before the end of February, you'll likely lose your drug coverage. While insurance companies may “crosswalk” you into a comparable plan, this is not guaranteed.",
          keyTakeaways: [
            "<strong>Must Act:</strong> Plans don't auto-renew if they are leaving the market. You must actively choose a new plan.",
            "<strong>Special Enrollment Period (SEP):</strong> You have until the end of February to enroll in a plan without penalty, but enrolling before the end of the year ensures no gap in coverage.",
            "<strong>Don't Wait:</strong> Acting promptly ensures coverage starts Jan 1 and avoids paying full price for meds.",
            "<strong>Did you know?</strong> $2,100 is the most you'll pay for covered drugs in 2026. The 'donut hole' officially closed and the coverage gap was eliminated.",
          ],
        },
      },
      {
        id: 2,
        title: "Enroll in a New Plan by Dec. 7",
        subtitle: "Rush to enroll.",
        outcome: {
          result: "Great! You're set for Jan. 1, but you didn't *have* to rush.",
          clarification: "Enrolling now is smart because coverage will seamlessly start Jan 1. However, you had more time to shop than you thought. Since your plan was terminating, you had a Special Enrollment Period (SEP) that lasts through February 28th.",
          keyTakeaways: [
            "<strong>Continuous Coverage:</strong> Enrolling by Dec 7 (the end of Open Enrollment) guarantees no gap in coverage on Jan 1.",
            "<strong>SEP Knowledge:</strong> Plan non-renewal grants an SEP. You should enroll by the end of December for a January 1 effective date, but you didn’t have to rush to enroll before the end of OEP.",
            "<strong>Did you know?</strong> $2,100 is the most you'll pay for covered drugs in 2026. The 'donut hole' is now closed and the coverage gap was eliminated.",
          ],
        },
      },
      {
        id: 3,
        title: "Deal with it in January",
        subtitle: "I'll figure it out later.",
        outcome: {
          result: "Gap in coverage!",
          clarification: "You used your SEP, which is allowed! But because you waited until January to enroll, your new coverage won't start until February 1st. You are uninsured for one month.",
          keyTakeaways: [
            "<strong>Timing Matters:</strong> SEP coverage starts the first of the *following* month you enroll. A January enrollment means a February 1st start.",
            "<strong>No Late Penalties:</strong> Since you had an SEP, you avoid the permanent Part D late enrollment penalty, but you still have to pay full price for drugs in January.",
            "<strong>Best Practice:</strong> To avoid a gap, you should have enrolled by December 31st for a January 1st effective date.",
            "<strong>Did you know?</strong> $2,100 is the most you'll pay for covered drugs in 2026. The 'donut hole' is now closed and the coverage gap was eliminated.",
          ],
        },
      },
    ],
  },
    {
    id: 4,
    title: "Dual Eligibility Maze",
    subtitle: "Transitioning from Medicaid to Medicare",
    character: "Jack",
    intro: "Jack turns 65 in a few months and currently has Medicaid. He has $8k in savings and makes <$1,200/mo. He's confused about what happens next.",
    choices: [
      {
        id: 1,
        title: "Do Nothing",
        subtitle: "Medicaid coverage will continue",
        outcome: {
          result: "Risk of losing coverage.",
          clarification: "Medicaid rules change at 65. You are required to enroll in Medicare Parts A & B to keep getting help. Doing nothing can lead to a loss of benefits.",
          keyTakeaways: [
            "<strong>Medicare is a Must:</strong> Medicare must be primary. To qualify for programs that help with Medicare costs, you must be enrolled in Medicare first.",
            "<strong>Apply for MSP:</strong> After enrolling in Medicare, you should apply for a Medicare Savings Program (like QMB). QMB helps with Medicare costs (premiums, deductibles, etc).",
            "<strong>Extra Help is Automatic with MSP:</strong> If you get an MSP, you are automatically 'deemed' eligible for Extra Help with costs for covered drugs. No separate application is needed.",
          ],
        },
      },
      {
        id: 2,
        title: "Apply for Medicare Savings Program (MSP)",
        subtitle: "Help me with premiums.",
        outcome: {
          result: "Jackpot! You get QMB *and* Extra Help!",
          clarification: "You qualify for the QMB program, which pays your Part B premium and all Medicare cost-sharing. AND, enrolling in an MSP automatically enrolls you in 'Extra Help' for prescription drugs. You solved two problems with one application!",
          keyTakeaways: [
            "<strong>Medicare Required:</strong> You must enroll in Medicare first to qualify for QMB.",
            "<strong>QMB Benefits:</strong> Pays for Part A/B premiums, deductibles, copays, and coinsurance. It doesn't offer the same full coverage as Medicaid, but it covers all Medicare cost-sharing.",
            "<strong>The 'Deemed' Status:</strong> If you have an MSP, the system automatically 'deems' you eligible for Extra Help. No separate application needed.",
             "<strong>D-SNP:</strong> You may now be eligible for a Dual Special Needs Plan (D-SNP), a type of Medicare Advantage plan for dual-eligible individuals.",
          ],
        },
      },
      {
        id: 3,
        title: "Apply for Extra Help",
        subtitle: "Just help me with drugs.",
        outcome: {
          result: "Partial win, but you're losing money.",
          clarification: "You got Extra Help for your prescriptions, which is great. However, applying for Extra Help does not automatically enroll you in the Medicare Savings Program (MSP/QMB). You are still paying the Part B premium and the 20% coinsurance for doctors!",
          keyTakeaways: [
            "<strong>Missed Opportunity:</strong> You missed out on QMB, which would have saved you thousands per year in Part B premiums plus all your medical copays.",
            "<strong>Correct Order:</strong> Always apply for an MSP first if your income allows. Applying for MSP triggers Extra Help automatically. The reverse is not true.",
            "<strong>Two Applications:</strong> To get full benefits now, you would need to go back and complete a separate application for the Medicare Savings Program.",
          ],
        },
      },
    ],
  },
];

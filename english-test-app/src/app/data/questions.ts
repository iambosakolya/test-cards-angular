export interface QuestionCard {
  id: number;
  question: string;
  answer: string;
}

export const QUESTIONS: QuestionCard[] = [
  {
    id: 1,
    question:
      'Is it okay not to invest in expensive software tools and explore free or open-source alternatives?',
    answer: `<b>Well, I think that's probably okay</b>, <b>depending on</b> the project's requirements and the team's technical maturity.

<b>If you're in a situation where</b> your project has a limited budget and the team is comfortable configuring and maintaining open-source tools, exploring free alternatives <b>is probably your best bet</b>. If the team finds a lot of missing features or stability problems in a free tool, they fix them by contributing patches or switching to a better-supported open-source project. This <b>could potentially lead to</b> significant cost savings, and it <b>has the added bonus that</b> the team gains deeper technical knowledge of the tools they use.

<b>On top of that</b>, if you're working on a smaller-scale internal project where the stakes are relatively low, open-source tools often cover most of the needs without any licensing costs.

<b>Now, that said</b>, <b>it may not be a good idea</b> to rely solely on free or open-source tools if your project operates in a highly regulated industry or demands enterprise-grade support. If the customer <b>is facing tough competition and urgently needs</b> robust, reliable tooling with guaranteed uptime, free alternatives might <b>pose significant risks to</b> the project's stability. You <b>could potentially end up with</b> unexpected downtime or security vulnerabilities that no one is contractually obligated to fix. That can also <b>have the side effect of</b> creating a dependency on community contributors whose priorities may not align with yours.

So, I think <b>it's crucial to remember that</b> <b>there's always a trade-off between</b> cost savings and reliability. <b>It's really just a matter of</b> your project's risk tolerance and support needs. <b>And for that reason</b>, <b>we'll have to make a judgment call</b> based on the specific context — weighing the potential benefits of free tools against the risks of lacking professional support.`,
  },
  {
    id: 2,
    question:
      "Is it okay to delegate project tasks based on team members' expertise rather than equal distribution?",
    answer: `<b>Well, I think that's probably okay</b>, <b>depending on</b> the team dynamics and the project timeline.

<b>If you're in a situation where</b> the project is under a tight deadline and quality is critical, assigning tasks based on expertise <b>is probably your best bet</b>. When you assign a complex feature to someone who already knows that domain inside out, it <b>could potentially lead to</b> faster delivery and fewer bugs. This <b>has the added bonus that</b> the team can maintain high standards without spending extra time on ramp-up.

<b>On top of that</b>, <b>if you're working on a critical part of the system</b> — say, a payment integration or a security module — having the most experienced person handle it reduces the chance of costly mistakes.

<b>Now, that said</b>, <b>it may not be a good idea</b> to always delegate purely based on expertise if you're trying to grow your team's overall capabilities. If we make this the default approach, we <b>will inevitably end up with</b> knowledge silos, where only one person understands a particular part of the codebase. This <b>could potentially lead to</b> serious risks to the project if that person becomes unavailable. It also <b>has the side effect of</b> reducing motivation among less experienced team members who never get the chance to tackle challenging work.

So, I think <b>there's always a trade-off between</b> short-term efficiency and long-term team growth. <b>It's really just a matter of</b> your priorities and the project phase. <b>And for that reason</b>, a balanced approach — primarily expertise-driven but with deliberate opportunities for learning — is the way to go.`,
  },
  {
    id: 3,
    question: 'Is it okay to give a demo of a feature right before the release?',
    answer: `<b>Well, I think it may not be a good idea</b>, <b>depending on</b> the complexity of the feature and the maturity of the release process.

<b>If you're in a situation where</b> the feature is straightforward and has already been thoroughly tested, a last-minute demo might be acceptable. When we make straightforward updates to the code, we document what we did and why, but we don't go into extensive detail — and similarly, a brief demo of a small, well-tested feature shouldn't disrupt the release flow. In this case, it <b>has the added bonus that</b> stakeholders get a final confirmation of what's being shipped.

<b>Now, that said</b>, <b>if you're working on a complex feature or dealing with a critical part of the system</b>, doing a demo right before the release <b>poses serious risks to</b> the timeline. Stakeholders who see the feature for the first time <b>could potentially end up with</b> last-minute feedback or change requests. This <b>could potentially lead to</b> rushed fixes, regressions, or even a delayed release. It also <b>has the side effect of</b> creating unnecessary pressure on the QA team, who may need to re-test things under extreme time constraints.

<b>On top of that</b>, if the customer <b>is facing tough competition and urgently needs</b> the release to go out on schedule, any disruption at this stage is particularly dangerous.

So, I think <b>it's crucial to remember that</b> <b>there's always a trade-off between</b> stakeholder visibility and release stability. <b>It's really just a matter of</b> timing — demos are valuable, but they should happen early enough to allow for adjustments. <b>And for that reason</b>, scheduling the demo well before the release date <b>is probably your best bet</b>, so any feedback can be incorporated without jeopardizing the deadline.`,
  },
  {
    id: 4,
    question:
      'Should everyone in the team decide what project communication tools to choose, or should it be decided by project leads?',
    answer: `<b>Well, I think that's probably okay either way</b>, <b>depending on</b> the team size and the nature of the project.

<b>If you're in a situation where</b> the team is small and collaborative, involving everyone in the decision <b>is probably your best bet</b>. If team members are already using different tools and have strong preferences, a collective decision <b>could potentially lead to</b> higher adoption and satisfaction. It <b>has the added bonus that</b> people feel ownership over the tools they use daily, which <b>inevitably leads to</b> better engagement.

<b>Now, that said</b>, <b>it may not be a good idea</b> to involve everyone if you're dealing with a large team or multiple teams working across different time zones. If every person weighs in on every tool option, you <b>could potentially end up with</b> endless discussions and no clear resolution. This <b>poses risks to</b> the project's momentum, especially if the team <b>is facing tough competition and urgently needs</b> to start collaborating effectively. Having project leads make the call <b>has the added bonus that</b> the decision aligns with broader organizational standards and security requirements.

<b>On top of that</b>, when you're having trouble reaching consensus in a large group, it can be helpful to have the leads shortlist two or three options and then let the team vote — a middle ground that balances inclusion and efficiency.

So, I think <b>there's always a trade-off between</b> inclusivity and speed of decision-making. <b>It's really just a matter of</b> team size and urgency. <b>And for that reason</b>, <b>we'll have to make a judgment call</b> — but in most cases, having project leads decide with some team input is a practical approach.`,
  },
  {
    id: 5,
    question:
      'Is it okay not to involve every team member in every decision-making process to save time?',
    answer: `<b>Well, I think that's probably okay</b>, <b>depending on</b> the nature of the decision and its impact on the team.

<b>If you're in a situation where</b> decisions are operational or low-impact — such as choosing a code formatting standard or scheduling a minor internal meeting — limiting participation <b>is probably your best bet</b>. If we involve the entire team in every small decision, we <b>will inevitably end up with</b> meeting fatigue and slower progress. Keeping these decisions within a smaller group <b>could potentially lead to</b> faster turnaround and <b>has the added bonus that</b> the rest of the team can stay focused on productive work.

<b>On top of that</b>, if you're working on a project with tight deadlines, streamlining the decision-making process is essential for the long-term success of the delivery.

<b>Now, that said</b>, <b>it may not be a good idea</b> to exclude team members from decisions that directly affect their work — such as technology choices, architectural changes, or workflow adjustments. If we make significant technical decisions without consulting the developers who will implement them, it <b>poses serious risks to</b> the project's quality and team morale. People <b>could potentially end up with</b> frustration and a sense of being undervalued. This also <b>has the side effect of</b> creating blind spots, since the decision-makers may miss critical implementation details that only the hands-on team members would know.

So, I think <b>it's crucial to remember that</b> <b>there's always a trade-off between</b> efficiency and inclusivity. <b>It's really just a matter of</b> the decision's scope and impact. <b>And for that reason</b>, a good rule of thumb is: the higher the impact on the team's daily work, the more people should be involved.`,
  },
  {
    id: 6,
    question:
      'Is it okay to use one tool for task management and another tool for project planning simultaneously?',
    answer: `<b>Well, I think that's probably okay</b>, <b>depending on</b> the project's complexity and the team's workflow.

<b>If you're in a situation where</b> the project is large and multifaceted, using specialized tools for different purposes <b>is probably your best bet</b>. For example, if you find that one tool excels at granular task tracking while another provides better high-level roadmap visualization, combining them <b>could potentially lead to</b> a more complete picture of the project's status. It <b>has the added bonus that</b> each team member — whether a developer or a project manager — can work in the tool that best suits their role.

<b>On top of that</b>, <b>if you're working on a complex feature or dealing with a critical part of the system</b>, having a dedicated planning tool helps maintain strategic alignment while the task management tool handles day-to-day execution.

<b>Now, that said</b>, <b>it may not be a good idea</b> to use two tools simultaneously if the team is small or if there's no clear integration between them. If we're constantly switching between platforms and manually syncing information, we <b>could potentially end up with</b> data inconsistencies and duplicated effort. This <b>poses significant risks to</b> the project's transparency, because tasks might be updated in one tool but not the other. It also <b>has the side effect of</b> creating confusion about which tool is the single source of truth, which <b>could potentially lead to</b> miscommunication and missed deadlines.

So, I think <b>there's always a trade-off between</b> tool specialization and simplicity. <b>It's really just a matter of</b> whether the added complexity is justified by the benefits. <b>And for that reason</b>, <b>we'll have to make a judgment call</b> — but if we do go with two tools, ensuring seamless integration between them is absolutely essential.`,
  },
];

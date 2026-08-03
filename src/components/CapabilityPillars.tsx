import {
  Award,
  Check,
  GitBranch,
  Lightbulb,
  Puzzle,
  type LucideIcon,
} from 'lucide-react'

type Capability = {
  description: string
  icon: LucideIcon
  points: readonly string[]
  title: string
}

const capabilities: Capability[] = [
  {
    title: 'AI Architecture',
    description: 'Designing scalable multi-agent systems with modern AI frameworks and best practices.',
    icon: GitBranch,
    points: ['System Design', 'Agent Orchestration', 'Scalability & Reliability'],
  },
  {
    title: 'Problem Solving',
    description: 'Turning complex business challenges into intelligent automation solutions.',
    icon: Lightbulb,
    points: ['Business Analysis', 'Solution Design', 'Continuous Optimization'],
  },
  {
    title: 'Full-Stack Integration',
    description: 'Seamlessly integrating AI with tools, APIs, and enterprise systems.',
    icon: Puzzle,
    points: ['API Integrations', 'Data Pipelines', 'End-to-End Workflows'],
  },
  {
    title: 'Delivery Excellence',
    description: 'Delivering production-ready solutions with measurable business impact.',
    icon: Award,
    points: ['Quality Assurance', 'Documentation', 'Client Success'],
  },
]

export function CapabilityPillars() {
  return (
    <section className="capability-pillars" aria-labelledby="capability-pillars-title">
      <div className="content-container">
        <h2 id="capability-pillars-title">Four Capability Pillars</h2>
        <div className="capability-pillars__row">
          {capabilities.map(({ description, icon: Icon, points, title }) => (
            <article className="capability-pillar" key={title}>
              <div className="capability-pillar__heading">
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
              <ul>
                {points.map((point) => (
                  <li key={point}>
                    <Check aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

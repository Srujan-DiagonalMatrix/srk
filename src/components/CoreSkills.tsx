import {
  Blocks,
  BrainCircuit,
  ClipboardCheck,
  Cloud,
  Code2,
  Container,
  Database,
  Gauge,
  GitFork,
  PanelsTopLeft,
  Radio,
  ShieldCheck,
  Waypoints,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

type CoreSkill = {
  detail: string
  icon: LucideIcon
  title: string
}

const coreSkills: CoreSkill[] = [
  { title: 'Multi-Agent AI', detail: 'Systems', icon: BrainCircuit },
  { title: 'Workflow Automation', detail: '(n8n, Make, LangGraph)', icon: Workflow },
  { title: 'Python', detail: 'Advanced', icon: Code2 },
  { title: 'LLMs & Prompt', detail: 'Engineering', icon: GitFork },
  { title: 'API Design &', detail: 'Integrations', icon: Wrench },
  { title: 'Vector Databases', detail: '(Pinecone, ChromaDB)', icon: Waypoints },
  { title: 'Cloud Platforms', detail: '(AWS, GCP)', icon: Cloud },
  { title: 'Docker &', detail: 'Containerization', icon: Container },
  { title: 'Database Design', detail: '(PostgreSQL, MongoDB)', icon: Database },
  { title: 'Real-time Data', detail: 'Processing', icon: Radio },
  { title: 'System Architecture', detail: '& Design', icon: PanelsTopLeft },
  { title: 'Monitoring &', detail: 'Observability', icon: Gauge },
  { title: 'CI/CD &', detail: 'Deployment', icon: Blocks },
  { title: 'Testing &', detail: 'Quality Assurance', icon: ShieldCheck },
  { title: 'Agile Project', detail: 'Management', icon: ClipboardCheck },
]

export function CoreSkills() {
  return (
    <section className="core-skills" id="skills" aria-labelledby="core-skills-title">
      <div className="content-container">
        <h2 id="core-skills-title">Core Skills at a Glance</h2>
        <div className="core-skills__scroller" tabIndex={0} aria-label="Core skills">
          <div className="core-skills__grid">
            {coreSkills.map(({ detail, icon: Icon, title }) => (
              <article className="core-skill" key={`${title}-${detail}`}>
                <Icon aria-hidden="true" />
                <h3>
                  <span>{title}</span>
                  <span>{detail}</span>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

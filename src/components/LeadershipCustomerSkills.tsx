import { useState } from 'react'
import { Play } from 'lucide-react'
import thumbnail1 from '../assets/Thumbnail1.jpg'
import thumbnail3 from '../assets/Thumbnail3.jpg'
import thumbnail5 from '../assets/Thumbnail5.jpg'
import { VideoModal } from './VideoModal'

const skillsInAction = [
  {
    title: 'Leadership Technical Projects',
    description:
      'Leading complex technical projects from strategy through delivery, aligning teams, architecture and execution to create lasting business value.',
    videoUrl: 'https://www.youtube.com/watch?v=FwOTs4UxQS4',
    thumbnail: thumbnail5,
  },
  {
    title: 'Client Collaboration',
    description:
      'Working closely with clients to understand their goals, build trust and translate business needs into practical, high-impact solutions.',
    videoUrl:
      'https://www.youtube.com/watch?v=d0wUM8hIaxE&pp=ygUQQUkgQWdlbnQgdHJhaWxlcg%3D%3D&sttick=1',
    thumbnail: thumbnail3,
  },
  {
    title: 'Team Building & Mentoring',
    description:
      'Building high-performing teams through hands-on mentoring, shared ownership and a culture of continuous learning and collaboration.',
    videoUrl: 'https://www.youtube.com/watch?v=pHRZm2BwNQc',
    thumbnail: thumbnail1,
  },
] as const

export function LeadershipCustomerSkills() {
  const [activeSkill, setActiveSkill] = useState<(typeof skillsInAction)[number] | null>(null)

  return (
    <section className="leadership-customer-skills" aria-labelledby="leadership-skills-title">
      <div className="content-container">
        <h2 id="leadership-skills-title">Leadership &amp; Customer skills in Action</h2>
        <div className="leadership-customer-skills__grid">
          {skillsInAction.map((skill) => (
            <article className="skill-in-action" key={skill.title}>
              <h3>{skill.title}</h3>
              <button
                className="skill-in-action__video"
                type="button"
                onClick={() => setActiveSkill(skill)}
                aria-label={`Play ${skill.title}`}
              >
                <img src={skill.thumbnail} alt="" width="640" height="360" />
                <span className="skill-in-action__shade" aria-hidden="true" />
                <span className="skill-in-action__play" aria-hidden="true">
                  <Play fill="currentColor" />
                </span>
              </button>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>

      {activeSkill && (
        <VideoModal
          isOpen
          onClose={() => setActiveSkill(null)}
          title={activeSkill.title}
          videoUrl={activeSkill.videoUrl}
        />
      )}
    </section>
  )
}

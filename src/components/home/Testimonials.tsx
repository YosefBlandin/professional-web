import { profile } from '@/content/profile';
import { testimonials } from '@/content/testimonials';
import { QuoteCard } from './QuoteCard';

export function Testimonials() {
    return (
        <section className="section alt" id="testimonials" aria-labelledby="t-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">Testimonials</p>
                    <h2 id="t-title">What people I’ve worked with say</h2>
                    <p className="lead-quote">“One of the most exceptional developers I have ever worked with.”</p>
                </div>
                <div className="quotes">
                    {testimonials.map((testimonial) => (
                        <QuoteCard key={testimonial.name} testimonial={testimonial} />
                    ))}
                </div>
                <p className="after-list">
                    <a className="textlink" href={profile.links.linkedin} target="_blank" rel="noopener">
                        Read all recommendations on LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                </p>
            </div>
        </section>
    );
}

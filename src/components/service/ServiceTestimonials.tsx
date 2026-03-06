import { motion } from "framer-motion";

type Testimonial = { quote: string; name: string; role: string };

type Props = { testimonials: Testimonial[] };

const ServiceTestimonials = ({ testimonials }: Props) => (
  <section className="bg-mist px-6 py-16 sm:py-20">
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-accent">Testimonials</p>
        <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Wat klanten zeggen</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.name + idx}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.4)]"
          >
            <div className="mb-3 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, star) => (
                <span key={star}>★</span>
              ))}
            </div>
            <p className="text-base leading-relaxed text-slate-800">“{item.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="text-sm">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="text-slate-600">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceTestimonials;





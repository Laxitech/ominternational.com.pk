const paragraphs = [
  "OM international Private Limited is headed by internationally renowned educationist “Prof. Dr. Omar Masood”. Prof. Masood has over 20 years of experience of teaching, consultancy, administrative roles in some of the leading universities and financial institutions in the world. He is a lead advisor on finance, economy, education (curriculum/skills development) and banking for Saudi Arabian, Malaysian, Turkish and UK Governments.",
  "Ever since the inception of OM International the vision has been to embrace the future trends in Higher Education from around the world and then introduce them  in Pakistan. After more than ten years of being in business, we can proudly say that we have achieved that goal by introducing Online Programmes to countless number of students across the length and breadth of the country.",
  "OM International is the premier representative of “Tun Abdul Razak University” (UNIRAZAK) in Pakistan to facilitate accredited degree programs and recruit students who are interested to study on-campus in Malaysia or through flexible online distance learning.",
  "As the facilitation partner of the university, OM International has no role in marking, checking, or any kind of evaluation in the On-Campus/Online Distance Learning Programs. OM International is only providing facilitation through its centers in regards to their admissions processing at much discounted prices.",
  "OM International is offering following programmes  in Pakistan through its facilitation centers across Pakistan. Now OM International has opened its flagship international facilitation center at Edgware Road, Central London, United Kingdom.",
];

export default function WhoWeAre() {
  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="bg-surface py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-1000xl px-4 sm:px-6 lg:px-8">
        <h2
          id="who-we-are-heading"
          className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-heading"
        >
          Who We are
        </h2>

        <div className="mt-6 space-y-4 text-sm leading-7  text-body sm:mt-8 sm:text-base">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

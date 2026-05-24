// TODO: Replace with the real email address before going live
const CONTACT_EMAIL = "your-email@example.com";

export default function ContactButton({ paintingTitle }: { paintingTitle: string }) {
  const subject = encodeURIComponent(`Interested in "${paintingTitle}"`);
  const body = encodeURIComponent(
    `Hello,\n\nI am interested in purchasing "${paintingTitle}". Could you please provide more details?\n\nThank you.`
  );

  return (
    <a
      href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
      className="inline-block bg-bark text-cream font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-sienna transition-colors duration-200"
    >
      Interested in this piece? Email me
    </a>
  );
}

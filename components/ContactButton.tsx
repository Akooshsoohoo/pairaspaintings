const CONTACT_EMAIL = "debasreesaha53@yahoo.com";

export default function ContactButton({ paintingTitle }: { paintingTitle: string }) {
  const subject = encodeURIComponent(`Interested in "${paintingTitle}"`);
  const body = encodeURIComponent(
    `Hello,\n\nI am interested in purchasing "${paintingTitle}". Could you please provide more details?\n\nThank you.`
  );

  return (
    <a
      href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
      className="btn-ornate"
    >
      Interested in this piece? Email me
    </a>
  );
}

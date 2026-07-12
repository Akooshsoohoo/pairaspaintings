import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Debasree Saha.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl text-charcoal mb-4 text-center">About</h1>
      <p className="font-sans text-charcoal/50 text-sm tracking-widest uppercase mb-16 text-center">
        Debasree Saha &mdash; &ldquo;Paira&rdquo;, meaning pigeon in Bengali
      </p>

      <div className="font-sans text-charcoal/70 leading-relaxed text-lg space-y-6">
        <p>
          I was born in 1967 in Bangladesh. When I was three, our family moved to India,
          to Calcutta, where my aunts and uncle were already living. My grandfather&rsquo;s
          business was in Chittagong. I finished 12th grade in Calcutta.
        </p>
        <p>
          In the middle of my first year of college, I got a chance to go to the former
          Soviet Union, Russia. I used to read many storybooks and history, and I am a
          little adventurous, I was not scared to go to a new country at the age of
          17.
        </p>
        <p>
          My brother used to go to Government Art College in Calcutta. I used to take
          paper, colors, and a pencil, and would draw and paint next to him. At school,
          whenever any sketch was needed for biology or any other class, my classmates
          would have me draw it, and it happened easily.
        </p>
        <p>
          For a long period of time, I did not paint or sketch or do anything like that.
          I was busy with the flow of life in Russia and got married. After my three
          children grew up, I started again as a hobby, which gives me peace. I went to
          an oil painting class for three months and also used to watch lots of art
          videos. It became my hobby, and I love doing it. In spite of lots of household
          work, people started buying my paintings, and I got more confident about what
          I am doing.
        </p>
        <p>
          I paint human figures, beautiful faces, flowers, plants, and pet animals. Now
          I am 56; I have raised three children well and took care of one grandson. They
          have become beautiful human beings. I feel complete. Looking at my paintings,
          people will know my vibrant and bold character, and at the same time, my soft
          and beautiful heart.
        </p>
      </div>
    </div>
  );
}

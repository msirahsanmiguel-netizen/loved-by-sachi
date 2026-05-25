export default function LovedBySachi() {
const products = [];

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#1E1E1E]">
      <nav className="flex items-center justify-between px-6 py-5 border-b border-[#E5DDD3] bg-white/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-serif tracking-wide">
          Loved by Sachi
        </h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#shop" className="hover:opacity-70">
            Shop
          </a>
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B6B] mb-4">
            Personal Preloved Pieces
          </p>

          <h2 className="text-5xl md:text-6xl leading-tight font-serif mb-6">
            Pieces worth
            <br />
            loving again.
          </h2>

          <p className="text-lg text-[#5E554B] mb-8 max-w-lg">
            Carefully selected preloved fashion pieces and timeless finds
            looking for a second home.
          </p>

          <a
            href="#shop"
            className="inline-block bg-black text-white px-7 py-3 rounded-full hover:opacity-90 transition"
          >
            Shop Now
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
            alt="Fashion"
            className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
          />
        </div>
      </section>

      <section id="shop" className="px-6 md:px-16 py-24 text-center">
  <h3 className="text-4xl font-serif mb-6">
    Coming Soon
  </h3>

  <p className="text-lg text-[#5E554B] max-w-2xl mx-auto">
    Carefully curated authentic preloved pieces will be added soon.
  </p>
</section>

      <section
        id="about"
        className="px-6 md:px-16 py-20 bg-[#EFE7DD]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8A7B6B] mb-5">
            About the Shop
          </p>

          <h3 className="text-4xl font-serif mb-6">
            Loved by Sachi
          </h3>

<p className="text-lg leading-8 text-[#5E554B]">
  Loved by Sachi is a small online shop offering my personally owned preloved pieces — all thoughtfully curated and carefully maintained.
</p>
<br />
<br />

<span className="text-2xl font-serif">
  personally owned & carefully maintained
</span>
            
          
        </div>
      </section>

      <section id="contact" className="px-6 md:px-16 py-20 text-center">
        <h3 className="text-4xl font-serif mb-4">
          Get in Touch
        </h3>

        <p className="text-[#5E554B] mb-8">
          For orders and inquiries, message us on Instagram or email us.
        </p>

        <div className="space-y-2 text-lg">
          <a
  href="https://instagram.com/lovedbysachi_"
  target="_blank"
  className="underline"
>
  @lovedbysachi_
</a>
          <p>lovedbysachi@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
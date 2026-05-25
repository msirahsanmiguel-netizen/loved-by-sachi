export default function LovedBySachi() {
  const products = [
    {
      name: 'Coach Shoulder Bag',
      price: '₱2,500',
      condition: 'Excellent Condition',
      image:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Neutral Knit Cardigan',
      price: '₱650',
      condition: 'Like New',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Minimal Leather Tote',
      price: '₱1,800',
      condition: 'Good Condition',
      image:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    },
  ];

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

      <section id="shop" className="px-6 md:px-16 py-16">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-serif">Featured Items</h3>
          <p className="text-sm text-[#7C7267]">Updated weekly</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-2 gap-4">
                  <h4 className="font-medium text-lg">{product.name}</h4>
                  <span className="font-semibold">{product.price}</span>
                </div>

                <p className="text-sm text-[#6D645B] mb-5">
                  {product.condition}
                </p>

                <button className="w-full bg-[#1E1E1E] text-white py-3 rounded-full hover:opacity-90 transition">
                  Reserve Item
                </button>
              </div>
            </div>
          ))}
        </div>
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
          <p>@lovedbysachi_</p>
          <p>lovedbysachi@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
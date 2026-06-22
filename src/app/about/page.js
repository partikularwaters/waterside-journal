// src/app/about/page.js

export const metadata = {
  title: "About | Waterside",
  description: "The mission, editorial philosophy, and reader rule of Waterside.",
};

export default function AboutPage() {
  return (
    <article>
      {/* 1. Page Header */}
      <header className="essay-header">
        <p className="essay-header__series">Manifesto</p>
        <h1 className="essay-header__title">About Waterside</h1>
      </header>

      {/* 2. Page Content */}
      <div className="essay-body">
        
        {/* --- SECTION 1: Public-Facing Description --- */}
        <h2>What is Waterside?</h2>
        <p>
          Waterside is a Filipino confessional Baptist journal of theological essays, 
          historical retrieval, and pastoral reflection. It is written for ordinary 
          Filipino Christians who hunger for deeper roots — those who wish to draw 
          from the whole catholic heritage of the Church without abandoning their 
          confessional home. Its essays are written from the riverbank of the 1689 
          Second London Baptist Confession of Faith, in the conviction that every true 
          bank runs beside the same waters — and that those waters flow from one source: 
          the Father, the Son, and the Holy Spirit, who is the living water poured out 
          into the life of the Church.
        </p>

        {/* Reusing your precise editorial separator rule */}
        <hr />

        {/* --- SECTION 2: THE READER RULE --- */}
        <h2>The Reader Rule</h2>
        <p>
          Waterside assumes one thing of its reader: a genuine thirst. The essays 
          are written for ordinary Filipino Christians who love Christ and know their 
          Bibles but have never stood beside the deeper waters the Church has drawn 
          from for two thousand years. The learned are welcome here. But it is the 
          thirsty we write for — to compel them to the pleasant waters, and to show 
          them the river was always there.
        </p>

      </div>
    </article>
  );
}
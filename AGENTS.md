<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

src/lib/site-data.ts — Site content: contact details, service descriptions, sector blurbs, and workflow copy. Business facts (phones, email, address) come from the Lancaster Security company profile PDF; edit here to change site-wide copy.
src/components/site/layout.tsx — Shared chrome (TopBar, Navbar, Footer, PageHero, CtaBand, SiteLayout). Root route wraps <Outlet /> in SiteLayout, so every route gets the header/footer automatically.
Routes: one page per section — /, /about, /services, /why-us, /who-we-serve, /workflow, /contact. Hash navigation was replaced by standalone routes; add new sections as route files with their own head() metadata.
Design: warm cream-and-gold palette. Do not reintroduce near-black section backgrounds (bg-ink); --ink is reserved for text, the footer uses --gold-deep.

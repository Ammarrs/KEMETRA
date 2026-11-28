// Page frame shared by the admin catalog pages:
// top bar (breadcrumb + language + preview tag), padded content area, footer.
const AdminPageShell = ({ crumbs, footer, children }) => (
  <main className="min-h-screen min-w-0 bg-background text-foreground">
    <div className="flex items-center justify-between gap-4 border-b border-divider px-4 py-5 md:px-8 lg:px-12">
      <p className="font-body text-xs text-muted-foreground">{crumbs}</p>
      <div className="flex items-center gap-4 font-body text-xs">
        <span className="text-muted-foreground" aria-label="Language: English or Arabic">
          EN / <span lang="ar">العربية</span>
        </span>
        <span className="hidden font-medium text-muted md:inline">Design preview</span>
      </div>
    </div>
    <div className="mx-auto w-full max-w-[1320px] px-4 pb-10 pt-9 md:px-8 lg:px-12">
      {children}
      <footer className="mt-12 border-t border-divider pt-6 font-body text-[0.7rem] leading-5 text-muted-foreground">
        {footer}
      </footer>
    </div>
  </main>
);
export default AdminPageShell;

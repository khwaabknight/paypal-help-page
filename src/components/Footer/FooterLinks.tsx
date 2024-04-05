

type FooterLinksProps = {
    footerlinks: FooterLink[];
}
type FooterLink = {
    id: string;
    text: string;
    link: string;
}

function FooterLinks({footerlinks}: FooterLinksProps ) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
        {
        footerlinks.map((link:FooterLink) => (
            <a key={link.id} href={link.link} className="text-accent-1 capitalize font-bold text-base hover:underline">{link.text}</a>
        ))
        }
    </div>
  )
}

export default FooterLinks
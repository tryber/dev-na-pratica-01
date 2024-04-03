import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  logo,
  youtubeIcon,
} from '../../assets';
import { LinkIcon } from '../buttons';

export default function Footer() {
  return (
    <footer className="px-36 pt-10 bg-zinc-900 text-slate-100">
      <section className="py-10 flex gap-10">
        <div>
          <img src={ logo } alt="Trybe logo" />
        </div>
        <div className="p-3">
          <p className="text-xl">Links</p>
          <ul className="p-1">
            <li>Home</li>
            <li>History</li>
          </ul>
        </div>
        <div />
      </section>
      <section className="flex justify-between py-10">
        <p>Trybe Desenvolvimento de Software LTDA</p>
        <div className="flex items-center justify-start gap-3">
          <LinkIcon
            url="https://www.instagram.com/betrybe"
            target="_blank"
            icon={ instagramIcon }
            alt="Instagram"
          />
          <LinkIcon
            url="https://www.facebook.com/betrybe"
            target="_blank"
            icon={ facebookIcon }
            alt="Facebook"
          />
          <LinkIcon
            url="https://www.linkedin.com/school/betrybe/"
            target="_blank"
            icon={ linkedinIcon }
            alt="LinkedIn"
          />
          <LinkIcon
            url="https://www.youtube.com/channel/UCZeN5eLUwiIyMaQjKR_ydVg"
            target="_blank"
            icon={ youtubeIcon }
            alt="YouTube"
          />
        </div>
      </section>
    </footer>
  );
}

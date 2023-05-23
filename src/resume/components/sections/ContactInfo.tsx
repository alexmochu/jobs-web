import { useCallback } from 'react';

export const ContactInfo = ({personal, links}) => {
  const { title, firstName, lastName, email } = personal

  const cleanLink = useCallback((link: string) => {
    return link.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }, []);

  return (
    <div className="text-center">
      <h1>{firstName + ' ' +  lastName}</h1>

      <h2>{title}</h2>

      <a href={`mailto:${email}`}>{email}</a>

      {/* {config.contactInfo.firstLink && (
        <>
          <span className="mx-1">•</span>
          <a href={config.contactInfo.firstLink}>{cleanLink(config.contactInfo.firstLink)}</a>
        </>
      )}

      {config.contactInfo.secondLink && (
        <>
          <span className="mx-1">•</span>
          <a href={config.contactInfo.secondLink}>{cleanLink(config.contactInfo.secondLink)}</a>
        </>
      )} */}

        {links.map((item, i) => (
        <>
          <span className="mx-1">•</span>
          <a href={item.link}>{cleanLink(item.label)}</a>
        </>
        ))}
    </div>
  );
};
import { useCallback } from 'react';

export const ContactInfo = ({state}) => {
  const { fullName, title, email, onlineLink, otherLinks } = state
 console.log('this is', state)
  const cleanLink = useCallback((link: string) => {
    return link.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }, []);

  return (
    <div className="text-center">
      <h1>{fullName}</h1>
      <h2>{title}</h2>
      <a href={`mailto:${email}`}>{email}</a>
      {otherLinks && (
        <>
          <span className="mx-1">•</span>
          <a href={otherLinks}>{cleanLink(otherLinks)}</a>
        </>
      )}
      {onlineLink && (
        <>
          <span className="mx-1">•</span>
          <a href={onlineLink}>{cleanLink(onlineLink)}</a>
        </>
      )}
    </div>
  );
};
import React from 'react';
import { redirect } from 'next/navigation';
import PropTypes from 'prop-types';

import ResumeEng from '@/components/directory/resume/ResumeEng';

ResumeLangPage.propTypes = {
  params: PropTypes.object,
};

export default function ResumeLangPage({ params }) {
  const { lang } = params;
  if (lang !== 'en') {
    redirect('/resume');
  }

  return (
    <>
      <ResumeEng />
    </>
  );
}
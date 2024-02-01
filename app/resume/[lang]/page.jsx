import React from 'react';
import { redirect } from 'next/navigation';
import PropTypes from 'prop-types';

import ResumeEng from '@/components/directory/resume/ResumeEng';

ResumeLangPage.propTypes = {
  params: PropTypes.object,
};

export async function generateStaticParams() {
  return [
    {
      lang: 'en',
    },
    {
      land: 'ko',
    }
  ];
}

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
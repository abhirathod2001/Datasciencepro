export const theoryUploadGuide = {
  supportedBestFormat: 'js',
  githubPath: 'data/',
  note: 'For website theory content, paste Word document text into a JS syllabus file. A .docx file uploaded directly to GitHub will not automatically render as React content unless we add a parser or convert it first.',
  recommendedWorkflow: [
    'Open your Word document.',
    'Copy the theory text.',
    'Send it to Jarvis or paste it into a data/<topic>Syllabus.js file.',
    'Import that JS file into components/DataSciencePro.jsx.',
    'Commit to GitHub. Vercel redeploys automatically from GitHub.'
  ],
};

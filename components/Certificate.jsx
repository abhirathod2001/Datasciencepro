'use client';

export default function Certificate({ user, progress = 0, answered = 0 }) {
  const eligible = progress >= 70 && answered >= 50;
  const studentName = user?.name || 'Student';

  function printCertificate() {
    window.print();
  }

  return (
    <section id="certificate" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <div className="rounded-[2rem] border bg-white p-8 shadow-xl shadow-slate-900/5">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black uppercase tracking-widest text-blue-600">Certificate</p>
            <h2 className="mt-2 text-4xl font-black text-slate-950">Completion Certificate</h2>
            <p className="mt-2 text-slate-600">Unlock after 70% overall progress and 50 quiz attempts.</p>
          </div>
          <div className={`rounded-2xl px-5 py-3 font-black ${eligible ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
            {eligible ? 'Unlocked' : 'Locked'}
          </div>
        </div>

        <div className="rounded-[2rem] border-4 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 text-center">
          <p className="text-5xl">🎓</p>
          <h3 className="mt-4 text-4xl font-black text-slate-950">Certificate of Completion</h3>
          <p className="mt-4 text-slate-600">This certifies that</p>
          <p className="mt-3 text-3xl font-black text-blue-600">{studentName}</p>
          <p className="mt-3 text-slate-600">has completed the learning requirements for</p>
          <p className="mt-3 text-2xl font-black text-slate-950">Data Science & AI Learning Program</p>
          <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-2xl font-black text-blue-600">{progress}%</p><p className="text-sm text-slate-500">Progress</p></div>
            <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-2xl font-black text-blue-600">{answered}</p><p className="text-sm text-slate-500">Questions Attempted</p></div>
          </div>
          <p className="mt-6 text-sm text-slate-500">Issued: {new Date().toLocaleDateString()}</p>
          <button type="button" disabled={!eligible} onClick={printCertificate} className="mt-6 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500">
            {eligible ? 'Download / Print Certificate' : 'Complete Requirements First'}
          </button>
        </div>
      </div>
    </section>
  );
}

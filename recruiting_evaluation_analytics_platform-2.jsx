export default function RecruitingEvaluationAnalyticsPlatform() {
  return (
    <div className="min-h-screen bg-red-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="bg-white rounded-3xl shadow-sm p-6 border-4 border-red-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-red-800 text-white flex items-center justify-center text-3xl font-black shadow-lg">
              N
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-red-800 font-bold">University of Nebraska</div>
              <div className="text-gray-500">Men’s Gymnastics Recruiting Analytics Platform</div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Nebraska Men's Gymnastics Recruiting & Evaluation Center</h1>
              <p className="text-gray-600 mt-2 text-lg">
                A University of Nebraska recruiting intelligence platform designed to evaluate current athletes, compare recruits, and strengthen championship roster construction.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full lg:w-auto">
              <div className="bg-red-100 rounded-2xl p-4 text-center border border-blue-100">
                <div className="text-2xl font-bold">18</div>
                <div className="text-sm text-gray-600">Current Athletes</div>
              </div>
              <div className="bg-red-100 rounded-2xl p-4 text-center border border-green-100">
                <div className="text-2xl font-bold">26</div>
                <div className="text-sm text-gray-600">Active Recruits</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-4 text-center border border-yellow-100">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-gray-600">Priority Targets</div>
              </div>
              <div className="bg-red-100 rounded-2xl p-4 text-center border border-red-100">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm text-gray-600">Roster Fit Score</div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <section className="xl:col-span-2 bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-semibold">Recruit Comparison Matrix</h2>
                <p className="text-gray-500 mt-1">Weighted scoring based on your program priorities.</p>
              </div>

              <select className="border rounded-xl px-4 py-2 bg-gray-50">
                <option>Overall Fit</option>
                <option>High Bar Specialists</option>
                <option>All Around Potential</option>
                <option>Academic Priority</option>
              </select>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-sm uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="p-4">Recruit</th>
                    <th className="p-4">AA Potential</th>
                    <th className="p-4">Event Strength</th>
                    <th className="p-4">Academic Fit</th>
                    <th className="p-4">Culture Fit</th>
                    <th className="p-4">Injury Risk</th>
                    <th className="p-4">Overall</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'Andrew Larson',
                      aa: 9.5,
                      event: 9.2,
                      academic: 8.8,
                      culture: 9.6,
                      risk: 'Low',
                      score: 94,
                    },
                    {
                      name: 'Marcus Bell',
                      aa: 8.9,
                      event: 9.8,
                      academic: 8.5,
                      culture: 8.9,
                      risk: 'Moderate',
                      score: 90,
                    },
                    {
                      name: 'Tyler Chen',
                      aa: 9.1,
                      event: 8.7,
                      academic: 9.7,
                      culture: 9.1,
                      risk: 'Low',
                      score: 91,
                    },
                    {
                      name: 'Ethan Rivera',
                      aa: 8.2,
                      event: 9.4,
                      academic: 8.1,
                      culture: 8.5,
                      risk: 'High',
                      score: 84,
                    },
                  ].map((athlete, idx) => (
                    <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium">{athlete.name}</td>
                      <td className="p-4">{athlete.aa}</td>
                      <td className="p-4">{athlete.event}</td>
                      <td className="p-4">{athlete.academic}</td>
                      <td className="p-4">{athlete.culture}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            athlete.risk === 'Low'
                              ? 'bg-green-100 text-green-700'
                              : athlete.risk === 'Moderate'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {athlete.risk}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-red-700 h-3 rounded-full"
                              style={{ width: `${athlete.score}%` }}
                            />
                          </div>
                          <span className="font-semibold">{athlete.score}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200 space-y-5">
            <div>
              <h2 className="text-2xl font-semibold">Roster Needs</h2>
              <p className="text-gray-500 mt-1">Areas to prioritize in recruiting.</p>
            </div>

            {[
              { event: 'Pommel Horse', need: 92 },
              { event: 'High Bar', need: 78 },
              { event: 'Parallel Bars', need: 65 },
              { event: 'Vault', need: 40 },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{item.event}</span>
                  <span>{item.need}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-700 h-3 rounded-full"
                    style={{ width: `${item.need}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="border-t pt-5">
              <h3 className="font-semibold text-lg mb-3">Nebraska Recruiting Priorities</h3>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  Increase focus on pommel horse specialists in the 2027 class.
                </li>
                <li className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  Prioritize academically strong recruits to improve APR balance.
                </li>
                <li className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  Consider injury history weighting when evaluating top targets.
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-semibold">Evaluation Categories</h2>
                <p className="text-gray-500 mt-1">Customize scoring priorities.</p>
              </div>
              <button className="bg-red-800 text-white px-4 py-2 rounded-xl font-medium hover:opacity-90">
                Save Weights
              </button>
            </div>

            <div className="space-y-5">
              {[
                ['Athletic Potential', 35],
                ['Event Specialization', 25],
                ['Academic Fit', 15],
                ['Character & Leadership', 15],
                ['Recruiting Interest Level', 10],
              ].map(([label, value], idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <input
                    type="range"
                    defaultValue={value}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-semibold">Add New Evaluation</h2>
                <p className="text-gray-500 mt-1">Track athlete observations from visits or competitions.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded-xl p-3 bg-gray-50" placeholder="Athlete Name" />
              <input className="border rounded-xl p-3 bg-gray-50" placeholder="Graduation Year" />
              <input className="border rounded-xl p-3 bg-gray-50" placeholder="Club Program" />
              <input className="border rounded-xl p-3 bg-gray-50" placeholder="Coach Name" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {['FX', 'PH', 'SR', 'VT', 'PB', 'HB'].map((event) => (
                <div key={event}>
                  <label className="text-sm font-medium text-gray-600">{event}</label>
                  <input
                    type="number"
                    placeholder="0-10"
                    className="border rounded-xl p-3 bg-gray-50 w-full mt-1"
                  />
                </div>
              ))}
            </div>

            <textarea
              rows={5}
              placeholder="Evaluation Notes"
              className="w-full border rounded-2xl p-4 bg-gray-50 mt-5"
            />

            <div className="flex justify-end mt-5">
              <button className="bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition-opacity">
                Save Evaluation
              </button>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
            <div>
              <h2 className="text-2xl font-semibold">Decision Support Insights</h2>
              <p className="text-gray-500 mt-1">
                AI-style recommendations based on roster balance and weighted recruiting priorities.
              </p>
            </div>

            <button className="bg-red-800 text-white px-5 py-3 rounded-2xl font-medium">
              Generate Nebraska Recruiting Report
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">Best Overall Fit</div>
              <div className="text-2xl font-bold">Andrew Larson</div>
              <p className="text-gray-600 mt-2 text-sm">
                Projects as a strong fit for Nebraska’s competitive culture and long-term lineup consistency.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">Highest Ceiling</div>
              <div className="text-2xl font-bold">Marcus Bell</div>
              <p className="text-gray-600 mt-2 text-sm">
                High-upside recruit with scoring potential capable of impacting Nebraska at the NCAA level.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">Safest Projection</div>
              <div className="text-2xl font-bold">Tyler Chen</div>
              <p className="text-gray-600 mt-2 text-sm">
                Reliable long-term projection with strong academic alignment and durable performance trends.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

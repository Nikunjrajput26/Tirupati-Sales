import React, { useMemo, useState } from "react";

type Job = {
  id: string;
  type: string;
  title: string;
  blurb: string;
  department: string;
  location: string;
};

const jobs: Job[] = [
  { id: "1", type: "Full Time", title: "Sales Executive", blurb: "Build and maintain relationships with clients, drive product sales, and support business growth across industrial regions.", department: "Sales", location: "Ahmedabad" },
  { id: "2", type: "Full Time", title: "Service Engineer", blurb: "Provide on-site installation, troubleshooting, and maintenance support for electrical equipment and systems.", department: "Service", location: "Vadodara" },
  { id: "3", type: "Full Time / Part Time", title: "Logistics Coordinator", blurb: "Manage supply chain operations, ensure timely dispatches, and coordinate with vendors and transport teams.", department: "Logistics", location: "Surat" },
  { id: "4", type: "Full Time", title: "Accounts Executive", blurb: "Handle billing, vendor payments, and daily accounting tasks while ensuring compliance with company policies.", department: "Accounts", location: "Vadodara" },
];

export default function CareerPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  // base lists
  const allDepartments = useMemo(() => Array.from(new Set(jobs.map(j => j.department))), []);
  const allLocations = useMemo(() => Array.from(new Set(jobs.map(j => j.location))), []);

  // options depend on the other filter
  const departmentOptions = useMemo(() => {
    if (selectedLocation === "All") return ["All", ...allDepartments];
    const deps = jobs.filter(j => j.location === selectedLocation).map(j => j.department);
    return ["All", ...Array.from(new Set(deps))];
  }, [selectedLocation, allDepartments]);

  const locationOptions = useMemo(() => {
    if (selectedDepartment === "All") return ["All", ...allLocations];
    const locs = jobs.filter(j => j.department === selectedDepartment).map(j => j.location);
    return ["All", ...Array.from(new Set(locs))];
  }, [selectedDepartment, allLocations]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(j => {
      const deptMatch = selectedDepartment === "All" || j.department === selectedDepartment;
      const locMatch = selectedLocation === "All" || j.location === selectedLocation;
      return deptMatch && locMatch;
    });
  }, [selectedDepartment, selectedLocation]);

  // robust handlers: compute valid counterpart options from the incoming value
  function onDepartmentChange(newDept: string) {
    setSelectedDepartment(newDept);

    // compute valid locations for the newDept (if All -> allLocations)
    const validLocsSet = newDept === "All"
      ? new Set(allLocations)
      : new Set(jobs.filter(j => j.department === newDept).map(j => j.location));

    // if current selectedLocation is not in validLocs, reset to All
    if (selectedLocation !== "All" && !validLocsSet.has(selectedLocation)) {
      setSelectedLocation("All");
    }
  }

  function onLocationChange(newLoc: string) {
    setSelectedLocation(newLoc);

    // compute valid departments for the newLoc (if All -> allDepartments)
    const validDepsSet = newLoc === "All"
      ? new Set(allDepartments)
      : new Set(jobs.filter(j => j.location === newLoc).map(j => j.department));

    if (selectedDepartment !== "All" && !validDepsSet.has(selectedDepartment)) {
      setSelectedDepartment("All");
    }
  }

  return (
    <section>
      {/* Hero */}
      <div className="relative isolate overflow-hidden py-6 md:py-16">
        <div className="sm:max-w-[90vh] md:max-w-[80vh] lg:max-w-[60vw] px-6 lg:px-8">
          <div className="lg:mx-0">
            <h2 className="md:text-9xl font-bold tracking-tight text-white text-7xl">
              Join Our Team!
            </h2>

            <p className="mt-2 md:mt-8 text-lg md:text-3xl text-pretty text-gray-200">
              Be part of India’s most trusted distribution and servicing company since 1993.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 inline-block shadow-sm">
              Vacancy / Career
            </span>
            <div className="text-sm text-slate-500">Showing {filteredJobs.length} of {jobs.length}</div>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="department-select" className="mb-1 text-xs font-medium text-slate-600">Department</label>
                    <select
                      id="department-select"
                      value={selectedDepartment}
                      onChange={(e) => onDepartmentChange(e.target.value)}
                      className="pl-4 pr-8 py-2 min-w-[160px] rounded-xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                      aria-label="Filter by department"
                    >
                      {departmentOptions.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="location-select" className="mb-1 text-xs font-medium text-slate-600">Location</label>
                    <select
                      id="location-select"
                      value={selectedLocation}
                      onChange={(e) => onLocationChange(e.target.value)}
                      className="pl-4 pr-8 py-2 min-w-[160px] rounded-xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm outline-none transition focus:ring-2 focus:ring-orange-200"
                      aria-label="Filter by location"
                    >
                      {locationOptions.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {filteredJobs.map(job => (
                  <article key={job.id} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{job.type}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">{job.title}</h3>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className="rounded-md bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 border border-slate-100 shadow-sm">{job.department}</span>
                        <span className="rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-500 border border-slate-100">{job.location}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{job.blurb}</p>

                    <button type="button" className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 text-sm font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300">
                      Apply Now
                    </button>
                  </article>
                ))}

                {filteredJobs.length === 0 && <div className="col-span-full rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">No roles match your filters.</div>}
              </div>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-md">
              <div className="flex justify-center">
                <div className="w-full rounded-md bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white">Join Our Team</div>
              </div>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name*" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-orange-100" />
                <input type="email" placeholder="Your Email*" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-orange-100" />
                <input type="text" placeholder="Your Position*" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-orange-100" />

                <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-orange-100" defaultValue="">
                  <option value="" disabled>Choose Department*</option>
                  {departmentOptions.filter(d => d !== "All").map(d => <option key={d} value={d}>{d}</option>)}
                </select>

                <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-orange-100" defaultValue="">
                  <option value="" disabled>Choose Location*</option>
                  {locationOptions.filter(l => l !== "All").map(l => <option key={l} value={l}>{l}</option>)}
                </select>

                <label className="block cursor-pointer">
                  <span className="sr-only">Upload Resume</span>
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 file:mr-4 file:rounded-md file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-100" />
                </label>

                <textarea rows={4} placeholder="Enter your message" className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-orange-100" />

                <button type="submit" className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-200">Send Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

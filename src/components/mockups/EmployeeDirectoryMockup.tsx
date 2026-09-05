const EMPLOYEES = [
  { name: 'Grace Wanjiru', payroll: 'EMP-1042', role: 'Senior HR Officer', group: 'JG 6', dept: 'Human Resources', status: 'Active', dob: '14 Mar 1990', doe: '02 Jan 2018' },
  { name: 'Peter Otieno', payroll: 'EMP-1077', role: 'Accountant', group: 'JG 5', dept: 'Finance', status: 'Active', dob: '29 Nov 1988', doe: '19 Jun 2019' },
  { name: 'Amina Yusuf', payroll: 'EMP-1103', role: 'Procurement Officer', group: 'JG 5', dept: 'Supply Chain', status: 'On Leave', dob: '05 Jul 1993', doe: '11 Sep 2020' },
  { name: 'Brian Kimutai', payroll: 'EMP-1155', role: 'IT Support Lead', group: 'JG 6', dept: 'ICT', status: 'Active', dob: '21 Feb 1991', doe: '03 Apr 2021' },
  { name: 'Faith Achieng', payroll: 'EMP-1198', role: 'Records Officer', group: 'JG 4', dept: 'Administration', status: 'Active', dob: '17 Oct 1995', doe: '08 Aug 2022' },
]

export function EmployeeDirectoryMockup() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[var(--mist)]">
        <p className="text-sm font-semibold text-[var(--ink)]">Employee Directory</p>
        <span className="text-xs text-[var(--muted)]">1,284 records</span>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left text-xs min-w-[720px]">
          <thead>
            <tr className="text-[var(--muted)] border-b border-[var(--line)]">
              {['Employee', 'Payroll No.', 'Designation', 'Job Group', 'Department', 'Status', 'Date of Birth', 'Date Employed'].map((h) => (
                <th key={h} className="py-3 px-4 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {EMPLOYEES.map((e) => (
              <tr key={e.payroll} className="border-b border-[var(--line)] last:border-0">
                <td className="py-3 px-4 font-medium text-[var(--ink)] whitespace-nowrap">{e.name}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{e.payroll}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{e.role}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{e.group}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{e.dept}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      background: e.status === 'Active' ? '#e9f8f1' : '#eaf0ff',
                      color: e.status === 'Active' ? 'var(--green)' : 'var(--blue)',
                    }}
                  >
                    {e.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{e.dob}</td>
                <td className="py-3 px-4 text-[var(--muted)] whitespace-nowrap">{e.doe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ProjectsTable() {
  return (
    <div className="rounded-xl bg-zinc-900 p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left text-zinc-400">
            <th>Name</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Demo Project</td>
            <td>Today</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import { versions } from "#preload";
import "./ElectronVersions.css";

const ElectronVersions = () => {
  return (
    <>
      <table
        id="process-versions"
        data-testid="process-versions"
      >
        <tbody>
          {Object.entries(versions).map(({ "0": lib, "1": version }) => {
            return (
              <tr key={lib}>
                <th>{lib} :</th>
                <td>v{version}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <code>packages/renderer/src/components/ElectronVersions.tsx</code>
    </>
  );
};
export default ElectronVersions;

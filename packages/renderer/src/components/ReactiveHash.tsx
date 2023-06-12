import { sha256sum } from "#preload";
import { useState } from "react";
import "./ReactiveHash.css";

const ReactiveHash = () => {
  const [rawString, setRawString] = useState("Hello World");
  const hashedString = sha256sum(rawString);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              <label htmlFor="reactive-hash-raw-value">Raw value :</label>
            </th>
            <td>
              <input
                data-testid="reactive-hash-raw-value"
                id="reactive-hash-raw-value"
                value={rawString}
                onChange={e => setRawString(e.target.value)}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="reactive-hash-hashed-value">Hashed by node:crypto :</label>
            </th>
            <td>
              <input
                data-testid="reactive-hash-hashed-value"
                id="reactive-hash-hashed-value"
                value={hashedString}
                readOnly
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <code>packages/renderer/src/components/ReactiveHash.tsx</code>
    </>
  );
};
export default ReactiveHash;

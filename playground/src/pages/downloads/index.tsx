import { faCode, faServer, faCubes, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import React from "react";

import s from "./styles.scss";

function Download() {
  return (
    <div className={s.buttonsContainer}>
      <a href="/targets/web/client.ts" className={s.downloadButton} download="client.ts">
        <FontAwesomeIcon size="xs" icon={faCode} />
        WEB
      </a>
      <a className={s.downloadButton} href="/targets/node/client.ts" download="client.ts">
        <FontAwesomeIcon size="xs" icon={faCubes} />
        Node client
      </a>
      <a className={s.downloadButton} href="/targets/node/api.ts" download="api.ts">
        <FontAwesomeIcon size="xs" icon={faServer} />
        Node api
      </a>
      <a className={s.downloadButton} href="/targets/flutter/client.dart" download="client.dart">
        <FontAwesomeIcon size="xs" icon={faMobile} />
        Flutter
      </a>
    </div>
  );
}

export default observer(Download);
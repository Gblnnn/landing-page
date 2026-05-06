import { Mails } from "lucide-react";

interface Props {
  src?: string;
  name?: string;
  designation?: string;
  info?: string;
  mail?: string;
}

export default function TeamMember(props: Props) {
  return (
    <div
      className="team-member"
      style={{
        height: "",
        background: "rgba(100 100 100/ 1%)",
        width: "",
        padding: "0.45rem",
        borderRadius: "1.15rem",
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
        border: "2px solid rgba(100 100 100/ 50%)",
        boxShadow: "1px 1px 10px rgba(0 0 0/ 30%)",
      }}
    >
      {props.src ? (
        <img
          style={{
            background: "",
            height: "20ch",
            borderTopLeftRadius: "0.75rem",
            borderTopRightRadius: "0.75rem",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
          }}
          src={props.src}
        />
      ) : (
        <div
          style={{
            background: "no-repeat center/50% url('/log.png')",
            height: "20ch",
            borderTopLeftRadius: "0.75rem",
            borderTopRightRadius: "0.75rem",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
          }}
        ></div>
      )}

      {/* <img
        src="sohar_star_logo.png"
        style={{
          width: "6rem",
          height: "6rem",
          objectFit: "cover",
          borderRadius: "50%",
          border: "",
        }}
      /> */}

      <div
        style={{
          color: "white",
          height: "",
          flex: 1,
          border: "",
          borderLeft: "none",
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "",
          paddingRight: "1rem",
          paddingLeft: "1.5rem",
          width: "100%",
          padding: "1rem",
          borderBottomLeftRadius: "0.75rem",
          borderBottomRightRadius: "0.75rem",
          background: "linear-gradient(90deg, midnightblue, darkslateblue)",
          alignItems: "center",
        }}
      >
        <div>
          <p>{props.name}</p>

          {/* <div style={{display:"flex", flexFlow:"", gap:"0.25rem"}}>
        <LucideQuote fill="white" stroke="none" width={"1rem"}/>
        <p>Quote</p>
        </div> */}

          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
            }}
          >
            {props.designation}
          </p>
          <p style={{ opacity: "0.5", fontSize: "0.8rem" }}>{props.info}</p>
        </div>
        <div
          style={{
            display: "flex",
            border: "",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <a href={"mailto:" + props.mail}>
            <button
              style={{
                boxShadow: "1px 1px 8px rgba(0 0 0/ 40%)",
                background: "midnightblue",
                borderRadius: "0.5rem",
                padding: "0.5rem",
              }}
            >
              <Mails color="crimson" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

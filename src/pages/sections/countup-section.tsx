import { useEffect, useState } from "react";
import { Factory, UserCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AnimatedCount({
  end,
  duration = 1500,
  style,
}: {
  end: number;
  duration?: number;
  style?: React.CSSProperties;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, end]);

  return <span style={style}>{value}</span>;
}

export default function CountupSection() {
  const usenavigate = useNavigate();
  return (
    <>
      <div
        style={{
          border: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12rem",
          gap: "1.25rem",
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
        }}
      >
        <div
          onClick={() => usenavigate("/clients")}
          style={{
            display: "flex",
            flexFlow: "column",
            width: "6rem",
            border: "",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <UserCheck color="crimson" />

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <AnimatedCount
              end={750}
              duration={1500}
              style={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <p style={{ fontSize: "1.5rem" }}>+</p>
          </div>

          <p style={{ opacity: "0.75", textAlign: "center" }}>Clients</p>
        </div>

        <div
          onClick={() => usenavigate("/projects")}
          style={{
            display: "flex",
            flexFlow: "column",
            width: "6rem",
            border: "",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Factory color="crimson" />

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <AnimatedCount
              end={850}
              duration={1500}
              style={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <p style={{ fontSize: "1.5rem" }}>+</p>
          </div>

          <p style={{ opacity: 0.75, textAlign: "center" }}>Projects</p>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "column",
            width: "6rem",
            border: "",
            alignItems: "center",
          }}
        >
          <Users color="crimson" />

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <AnimatedCount
              end={1100}
              duration={1500}
              style={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <p style={{ fontSize: "1.5rem" }}>+</p>
          </div>

          <p style={{ opacity: 0.75, textAlign: "center" }}>Workers</p>
        </div>
      </div>
    </>
  );
}

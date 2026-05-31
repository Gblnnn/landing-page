import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { CheckCircle, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  jobId: string | null;
  jobTitle?: string;
}

export default function JobApplicationDialog({
  open,
  onClose,
  jobId,
  jobTitle,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addDoc(collection(db, "applications"), {
        name,
        email,
        phone,
        cvLink,
        jobId,
        jobTitle,
        created_at: Timestamp.now(),
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setCvLink("");
    } catch (err) {
      alert("Failed to submit application.");
    }
    setSubmitting(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,12,20,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(2px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.2,
            }}
            style={{
              background: "linear-gradient(120deg, #181f2a 60%, #232946 100%)",
              borderRadius: "1.25rem",
              padding: "1.5rem 1rem 1rem 1rem",
              minWidth: "320px",
              maxWidth: "420px",
              width: "100%",
              maxHeight: "90vh",
              boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "1.1rem",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              aria-label="Close dialog"
            >
              <X />
            </button>
            {!success && (
              <div style={{ textAlign: "center" }}>
                <h2
                  style={{
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Apply for <span style={{ color: "crimson" }}>{jobTitle}</span>
                </h2>
                <p style={{ color: "#bfc9d1", fontSize: "0.8rem" }}>
                  Fill out the form below to apply for this position.
                </p>
              </div>
            )}

            {success ? (
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    color: "white",
                    marginBottom: "1rem",
                    fontWeight: 500,
                    fontSize: "1rem",
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                    border: "",
                    gap: "1rem",
                  }}
                >
                  <CheckCircle color="lightgreen" />
                  <div>
                    <p>Application submitted successfully!</p>
                    <p style={{ fontSize: "0.75rem", opacity: 0.75 }}>
                      Thank you for your interest in joining our team.{" "}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSuccess(false);
                    onClose();
                  }}
                  style={{
                    width: "100%",
                    background: "crimson",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1.2rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    boxShadow: "0 2px 8px rgba(220,20,60,0.15)",
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <label
                    htmlFor="name"
                    style={{ fontSize: "0.9rem", color: "#eaeaea" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      padding: "0.5rem 0.8rem",
                      borderRadius: "0.4rem",
                      border: "1px solid #2d3748",
                      background: "#232946",
                      color: "#fff",
                      fontSize: "0.97rem",
                      outline: "none",
                      transition: "border 0.2s",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <label
                    htmlFor="email"
                    style={{ fontSize: "0.9rem", color: "#eaeaea" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: "0.5rem 0.8rem",
                      borderRadius: "0.4rem",
                      border: "1px solid #2d3748",
                      background: "#232946",
                      color: "#fff",
                      fontSize: "0.97rem",
                      outline: "none",
                      transition: "border 0.2s",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <label
                    htmlFor="phone"
                    style={{ fontSize: "0.9rem", color: "#eaeaea" }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      padding: "0.5rem 0.8rem",
                      borderRadius: "0.4rem",
                      border: "1px solid #2d3748",
                      background: "#232946",
                      color: "#fff",
                      fontSize: "0.97rem",
                      outline: "none",
                      transition: "border 0.2s",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <label
                    htmlFor="cvLink"
                    style={{ fontSize: "0.9rem", color: "#eaeaea" }}
                  >
                    CV Link
                  </label>
                  <input
                    id="cvLink"
                    type="url"
                    placeholder="Link to your CV (Google Drive, etc)"
                    value={cvLink}
                    required
                    onChange={(e) => setCvLink(e.target.value)}
                    style={{
                      padding: "0.5rem 0.8rem",
                      borderRadius: "0.4rem",
                      border: "1px solid #2d3748",
                      background: "#232946",
                      color: "#fff",
                      fontSize: "0.97rem",
                      outline: "none",
                      transition: "border 0.2s",
                    }}
                  />
                </div>
                <br/>
                <div style={{display:"flex", gap:"0.5rem", fontSize:"0.85rem", flexFlow:"column", alignItems:"center", border:""}}>
                  <div style={{display:"flex", gap:"0.5rem", justifyContent:"center", alignItems:"center", border:""}}>
                    <Info size={40}/>
                  <p>If you are attaching a google drive link, please make sure the file is set to "Anyone with the link can view".</p>
                  </div>
                  

                  {/* <p style={{textAlign:"right"}}> إذا كنت تقوم بإرفاق رابط جوجل درايف، فتأكد من ضبط الملف على "يمكن لأي شخص لديه الرابط عرضه".</p> */}
                 
                </div>
                <div
                  style={{
                    border: "",

                    display: "flex",
                    gap: "0.7rem",
                    justifyContent: "",
                    marginTop: "1rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={onClose}
                    style={{
                      flex: 1,
                      background: "#232946",
                      color: "#bfc9d1",
                      border: "1px solid #2d3748",
                      borderRadius: "0.4rem",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                      fontSize: "0.97rem",
                      fontWeight: 500,
                      transition: "background 0.2s, color 0.2s",
                    }}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      background: "crimson",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0.4rem",
                      padding: "0.5rem 1.2rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      fontSize: "0.97rem",
                      boxShadow: "0 2px 8px rgba(220,20,60,0.15)",
                    }}
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

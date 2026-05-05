import TeamMember from "@/components/team-member";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OurTeam() {
  const usenavigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        id="projects"
        className="page"
        style={{
          border: "",
          height: "fit-content",
          paddingTop: "1.5rem",
          background: "rgba(100 100 100/ 5%)",
        }}
      >
        <div
          style={{
            margin: "1.5rem",
            marginTop: "",
            border: "",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <button className="btn" onClick={() => usenavigate(-1)}>
              <ChevronLeft />
            </button>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              Our Team <ChevronRight color="crimson" />
            </h1>
          </div>

          <br />
          {/* 
          <Select defaultValue="management-team">
            <SelectTrigger
              style={{
                background: "rgba(100 100 100/ 10%)",
                border: "none",
                fontSize: "1.25rem",
                outline: "none",
                paddingLeft: "1.25rem",
                paddingRight: "1rem",
                height: "3rem",
              }}
              className="w-[250px]"
            >
              <SelectValue defaultValue={"management-team"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  style={{ fontSize: "1rem" }}
                  defaultChecked
                  value="management-team"
                >
                  Management Team
                </SelectItem>
                <SelectItem
                  style={{ fontSize: "1rem" }}
                  value="production-team"
                >
                  Production Team
                </SelectItem>
                <SelectItem style={{ fontSize: "1rem" }} value="manufacturing">
                  Manufacturing
                </SelectItem>
                <SelectItem style={{ fontSize: "1rem" }} value="landscaping">
                  Landscaping
                </SelectItem>
                <SelectItem
                  style={{ fontSize: "1rem" }}
                  value="road-and-earthworks"
                >
                  Road & Earthwork
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <br /> */}

          <div
            className=""
            style={{
              border: "",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              className="items-container"
              style={{
                border: "",
                display: "flex",
                marginTop: "",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
                paddingBottom: "1rem",
              }}
            >
              <TeamMember
                src=""
                name="Suresh Unni"
                designation="Managing Director"
                mail="suresh@soharstar.com"
                info=""
              />
              <TeamMember
                name="Aravind Unni"
                designation="Executive Director"
                mail="aravind@soharstar.com"
              />

              <TeamMember
                name="Lekha Suresh"
                designation="Finance Head"
                mail="lekha@soharstar.com"
              />
              <TeamMember
                mail="mpgnair@soharstar.com"
                name="M.P.G Nair"
                designation="Chief Executive Officer"
              />
              <TeamMember
                mail="rajesh@soharstar.com"
                name="Rajesh C.V"
                designation="Business Development / Strategic Planning"
              />
              <TeamMember
                mail="poonacha@soharstar.com"
                name="P.C Poonacha"
                designation="GM Operations"
              />

              <TeamMember
                name="Arjun V Nath"
                designation="Operations Manager"
                mail="arjun@soharstar.com"
              />

              <TeamMember
                name="Bejoy G"
                designation="Finance Controller"
                mail="bejoy@soharstar.com"
              />

              <TeamMember
                name="Binoy M.K"
                designation="Contracts Manager"
                mail="binoy@soharstar.com"
              />
              <TeamMember
                mail="niyaz@soharstar.com"
                name="Dr. Niyaz Khan"
                designation="QHSE Manager"
              />

              <TeamMember
                name="Sreenath S Charuvil"
                designation="MED Contracts manager"
                mail="sreenath@soharstar.com"
              />
              <TeamMember
                name="Susha Nalin"
                designation="Projects Manager"
                mail="susha@soharstar.com"
              />
            </div>

            {/* <Project img="https://static6.depositphotos.com/1000292/649/i/450/depositphotos_6490033-stock-photo-water-recycling-on-sewage-treatment.jpg" title="Project 1" desc="Brief description of project 1"/>

                <Project img="/pxfuel.jpg" title="Project 2" desc="Brief description of project 2"/>

                <Project img="https://st4.depositphotos.com/5797516/24306/i/450/depositphotos_243067188-stock-photo-landscape-oil-gas-refinery-manufacturing.jpg" title="Project 3" desc="Brief description of project 3"/>

                <Project img="https://motionarray.imgix.net/motion-array-1096692-auDdGLclkD-high_0009.jpg?w=660&q=60&fit=max&auto=format" title="Project 4" desc="Brief description of project 4"/> */}
          </div>

          {/* <br/><br/>
                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div>
                
                <br/><br/> */}
        </div>
      </div>
    </motion.div>
  );
}

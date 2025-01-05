'use client'
import { FaTent } from "react-icons/fa6";
import sideContent from "@/components/sidebar/content/content.module.css";
import { RiDraftFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { GiMoneyStack, GiTicket } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { statistic } from "@/libs/dashoboard";
import { graphStats } from "@/libs/totalTransaction";
import { useEffect, useState } from "react";
import organizerGuard from "@/hoc/organizerProtect";
import GraphEvent from "@/components/graph/graphEvent";
import GraphTransaction from "@/components/graph/graphTransaction";

function Dashboard() {
  

  const [eventTotal, setEventTotal] = useState(0);
  const [totalTrans, setTotalTrans] = useState(0)

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const total = await statistic();
        setEventTotal(total);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setEventTotal(0); // Default value in case of an error
      }
    };

    fetchStatistics();
  }, []);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const totalTransGraph = await graphStats();
        setTotalTrans(totalTransGraph);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setTotalTrans(0); // Default value in case of an error
      }
    };

    fetchTransaction();
  }, []);


  return (
    <section className={sideContent.dashboardSection}>
      

      {/* <div className={sideContent.missionContainer}>
        <h1>Ayo selesaikan misi</h1>
        
        <div className={sideContent.missionContent}>
          
          <div className={sideContent.missions}>
            <div className={sideContent.missionInner}>
              <FaFileCircleCheck className={sideContent.missionIcon} />
              Verifikasi no. Ponselmu
            </div>
            <button className={sideContent.missionBtn}>Verifikasi</button>
          </div>
          
          <div className={sideContent.missions}>
            <div className={sideContent.missionInner}>
              <FaCircleUser className={sideContent.missionIcon} />
              Lengkapi detail informasi dasar
            </div>
            <button className={sideContent.missionBtn}>Verifikasi</button>
          </div>
          
          <div className={sideContent.missions}>
            <div className={sideContent.missionInner}>
              <MdEditDocument className={sideContent.missionIcon} />
              Lengkapi detail informasi legal
            </div>
            <button className={sideContent.missionBtn}>Verifikasi</button>
          </div>
        </div>
      </div> */}

      {/* container record */}
      <div className={sideContent.recordContainer}>
        {/* isi content start*/}
        <div className={sideContent.recordContent}>
          <div className={sideContent.recordContentTop}>
            <FaTent className={`${sideContent.recordIcon} text-blue-300`} />
            <h1 className={sideContent.recordTitle}>Event Aktif</h1>
            <button className={sideContent.recordDetailBtn}>Detail</button>
          </div>

          <div className={sideContent.recordTotal}>
            <span className={sideContent.recordTotalNum}>{eventTotal}</span>
            <h1 className={sideContent.recordTotalPlaceholder}>Event</h1>
          </div>
        </div>

        <div className={sideContent.recordContent}>
          <div className={sideContent.recordContentTop}>
            <RiDraftFill
              className={`${sideContent.recordIcon} text-teal-300`}
            />
            <h1 className={sideContent.recordTitle}>Draft Event</h1>
            <button className={sideContent.recordDetailBtn}>Detail</button>
          </div>

          <div className={sideContent.recordTotal}>
            <span className={sideContent.recordTotalNum}>0</span>
            <h1 className={sideContent.recordTotalPlaceholder}>Event</h1>
          </div>
        </div>

        <div className={sideContent.recordContent}>
          <div className={sideContent.recordContentTop}>
            <IoWalletOutline
              className={`${sideContent.recordIcon} text-amber-700`}
            />
            <h1 className={sideContent.recordTitle}>Total Transaksi</h1>
            <button className={sideContent.recordDetailBtn}>Detail</button>
          </div>

          <div className={sideContent.recordTotal}>
            <span className={sideContent.recordTotalNum}>{totalTrans}</span>
            <h1 className={sideContent.recordTotalPlaceholder}></h1>
          </div>
        </div>

        <div className={sideContent.recordContent}>
          <div className={sideContent.recordContentTop}>
            <GiTicket className={`${sideContent.recordIcon} text-yellow-800`} />
            <h1 className={sideContent.recordTitle}>Total Tiket Terjual</h1>
            <button className={sideContent.recordDetailBtn}>Detail</button>
          </div>

          <div className={sideContent.recordTotal}>
            <span className={sideContent.recordTotalNum}>0</span>
            <h1 className={sideContent.recordTotalPlaceholder}>Tiket</h1>
          </div>
        </div>

        <div className={sideContent.recordContent}>
          <div className={sideContent.recordContentTop}>
            <GiMoneyStack
              className={`${sideContent.recordIcon} text-lime-700`}
            />
            <h1 className={sideContent.recordTitle}>Total Penjualan</h1>
            <button className={sideContent.recordDetailBtn}>Detail</button>
          </div>

          <div className={sideContent.recordTotal}>
            <span className={sideContent.recordTotalNum}>Rp 0</span>
            <h1 className={sideContent.recordTotalPlaceholder}></h1>
          </div>
        </div>

        <div className={sideContent.recordContent}>
          <div className={sideContent.recordContentTop}>
            <FaUsers className={`${sideContent.recordIcon} text-fuchsia-500`} />
            <h1 className={sideContent.recordTitle}>Total Pengunjung</h1>
            <button className={sideContent.recordDetailBtn}>Detail</button>
          </div>

          <div className={sideContent.recordTotal}>
            <span className={sideContent.recordTotalNum}>0</span>
            <h1 className={sideContent.recordTotalPlaceholder}>Orang</h1>
          </div>
        </div>
        {/* isi content end*/}
        <GraphEvent />
        <GraphTransaction />
      </div>
    </section>
  );
}

export default organizerGuard(Dashboard)
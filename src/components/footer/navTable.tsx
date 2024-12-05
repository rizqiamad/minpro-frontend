export default function NavTable() {
  return (
    <>
      <table className="text-white">
        <thead>
          <tr>
            <th className="text-start py-6 w-48">Tentang Loket</th>
            <th className="text-start py-6 tablet:w-96">Rayakan Eventmu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Masuk</td>
            <td>Cara Mempersiapkan Event</td>
          </tr>
          <tr>
            <td>Biaya</td>
            <td>Cara Membuat Event Lomba</td>
          </tr>
          <tr>
            <td>FAQ</td>
            <td>Cara Mempublikasikan Event</td>
          </tr>
          <tr>
            <td>Syarat dan Ketentuan</td>
            <td>Cara Mengelola Event</td>
          </tr>
          <tr>
            <td>Laporan Kesalahan</td>
            <td>Cara Membuat Konsep Acara yang Menarik</td>
          </tr>
          <tr>
            <td>Sistem</td>
            <td>Cara Membuat Event di Co-Working Space</td>
          </tr>
        </tbody>
      </table>
      <table className="text-white mt-6">
        <thead>
          <tr>
            <th className="text-start py-6 w-48">Lokasi Event</th>
            <th className="text-start py-6 ">Inspirasi Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jakarta</td>
            <td>Festival</td>
          </tr>
          <tr>
            <td>Bandung</td>
            <td>Konser</td>
          </tr>
          <tr>
            <td>Yogyakarta</td>
            <td>Olahraga</td>
          </tr>
          <tr>
            <td>Solo</td>
            <td>Teater & Drama</td>
          </tr>
          <tr>
            <td>Medan</td>
            <td>Atraksi</td>
          </tr>
          <tr>
            <td>Bali</td>
            <td>Semua Kategori</td>
          </tr>
          <tr>
            <td>Semua Kota</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
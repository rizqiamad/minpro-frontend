export default function OrderPage() {
  return (
    <main className="flex gap-6">
      <div>
        <h1>Detail Pemesanan</h1>
        <div>
          <div>Event Detail</div>
          <div>Ticket Info</div>
          <div>Ticket Detail</div>
        </div>
        <h1>Metode Pembayaran</h1>
        <div>Midtrans Field</div>
      </div>
      <div>
        <h1>Detail Harga</h1>
        <span>Total harga tiket</span>
        <span>Biaya Tambahan</span>
        <span>Biaya Platform</span>
        <span>Total Bayar</span>
        <button>Bayar Tiket</button>
      </div>
    </main>
  )
}
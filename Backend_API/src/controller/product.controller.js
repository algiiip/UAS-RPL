const db = require('../config/db');


exports.getAll = (req, res) => {
db.query('SELECT * FROM produk', (err, result) => {
if (err) return res.status(500).json(err);
res.json(result);
});
};


exports.create = (req, res) => {
const { id_produk, kode_produk, nama_produk, kategori, stok, harga_beli, harga_jual, tanggal_kadaluarsa } = req.body;
db.query(
'INSERT INTO produk (id_produk, kode_produk, nama_produk, kategori, stok, harga_beli, harga_jual, tanggal_kadaluarsa) VALUES (?,?,?,?,?,?,?,?)',
[id_produk, kode_produk, nama_produk, kategori, stok, harga_beli, harga_jual, tanggal_kadaluarsa],
err => {
if (err) return res.status(500).json(err);
res.json({ message: 'produk berhasil  ditambahkan' });
}
);
};


exports.update = (req, res) => {
const { kode_produk, nama_produk, kategori, stok, harga_beli, harga_jual, tanggal_kadaluarsa } = req.body;
const { id_produk } = req.params;


db.query(
  'UPDATE produk SET kode_produk=?, nama_produk=?, kategori=?, stok=?, harga_beli=?, harga_jual=?, tanggal_kadaluarsa=? WHERE id_produk=?',
  [kode_produk, nama_produk, kategori, stok, harga_beli, harga_jual, tanggal_kadaluarsa, id_produk],
  (err, result) => {
    if (err) return res.status(500).json(err);
    
        if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Update gagal: data tidak ditemukan atau tidak ada perubahan'
      });
    }
    
res.json({
      message: 'Update berhasil',
      affectedRows: result.affectedRows
    });
  }
)};


exports.remove = (req, res) => {
  const {id_produk} = req.params;
db.query(
    'DELETE FROM produk WHERE id_produk = ?',
    [id_produk],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Delete gagal: id_produk tidak ditemukan'
        });
      }

      res.json({
        message: 'Delete berhasil',
        affectedRows: result.affectedRows
      });
    }
  );
};
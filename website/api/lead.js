module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }
  console.log('[bikinin.id lead]', JSON.stringify(req.body || {}));
  res.status(200).json({ ok: true });
};

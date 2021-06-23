export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      bitcoin: '$19840',
      ethereum: '$12380'
    })
  }
}
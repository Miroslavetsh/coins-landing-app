export default (req, res) => {
  res.statusCode = 200

  res.json({
    bitcoin: {
      price: '$19840',
      title: 'Responsive Design',
      percentage: '+8.5%',
      notification: 'You’ ll Learn A Lot From This Task'
    },
    ethereum: {
      price: '$12380',
      title: 'Mobile Friendly ',
      percentage: '-3.2%',
      notification: 'Don’t Forget About Small Devices'
    }
  })
}
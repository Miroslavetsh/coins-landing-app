export default (req, res) => {

  res.statusCode = 200

  res.json({
    bitcoin: {
      title: 'Responsive Design',
      notification: 'You’ ll Learn A Lot From This Task'
    },
    ethereum: {
      title: 'Mobile Friendly',
      notification: 'Don’t Forget About Small Devices'
    }
  })
}
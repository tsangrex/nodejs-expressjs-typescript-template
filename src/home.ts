function home(req, res) {
  res.json({
    success: true,
    message: req.user
  });
}
export default home;

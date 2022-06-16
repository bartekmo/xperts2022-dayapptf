resource "google_compute_network" "tut1" {
  name                    = "${var.prefix}-vpc"
  auto_create_subnetworks = true
}

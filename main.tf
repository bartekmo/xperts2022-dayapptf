resource "google_compute_network" "myvpc" {
  name                    = "${var.prefix}-vpc"
  auto_create_subnetworks = false
}

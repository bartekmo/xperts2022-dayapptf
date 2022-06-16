resource "google_compute_network" "demo" {
  name                    = "${var.prefix}-vpc"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "demo" {
  name = "${var.prefix}-sb"
  ip_cidr_range = "10.0.0.0/24"
  network = google_compute_network.demo.self_link
  region = var.region
}

resource "google_compute_instance" "websrv" {
  name = "${var.prefix}-websrv"
  machine_type = "e2_standard-2"
  zone = "${var.region}-b"

  boot_disk {
    initialize_params {
      image = "ubuntu_os_cloud/ubuntu-2004-lts"
    }
  }

  network_interface {
    subnetwork = google_compute_subnetwork.demo.self_link
  }
}

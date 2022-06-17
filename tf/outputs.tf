output "service_ip" {
  value = google_compute_instance.websrv.network_interface[0].access_config[0].nat_ip
}
